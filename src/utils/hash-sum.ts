function pad(hash: string | any[], len: number) {
  while (hash.length < len) {
    hash = `0${hash}`
  }
  return hash
}

function fold(hash: number, text: string) {
  let i
  let chr
  let len
  if (text.length === 0) {
    return hash
  }
  for (i = 0, len = text.length; i < len; i++) {
    chr = text.charCodeAt(i)
    hash = (hash << 5) - hash + chr
    hash |= 0
  }
  return hash < 0 ? hash * -2 : hash
}

function foldObject(hash: any, o: { [x: string]: any }, seen: any) {
  return Object.keys(o).sort().reduce(foldKey, hash)
  function foldKey(hash: any, key: string) {
    return foldValue(hash, o[key], key, seen)
  }
}

function foldValue(
  input: number,
  value: any | null | undefined,
  key: string,
  seen: any[],
): string | number {
  const hash = fold(fold(fold(input, key), toString(value)), typeof value)
  if (value === null) {
    return fold(hash, 'null')
  }
  if (value === undefined) {
    return fold(hash, 'undefined')
  }
  if (typeof value === 'object' || typeof value === 'function') {
    if (seen.includes(value)) {
      return fold(hash, `[Circular]${key}`)
    }
    seen.push(value)

    const objHash = foldObject(hash, value, seen)

    if (!('valueOf' in value) || typeof value.valueOf !== 'function') {
      return objHash
    }

    try {
      return fold(objHash, String(value.valueOf()))
    } catch (err: any) {
      return fold(objHash, `[valueOf exception]${err.stack || err.message}`)
    }
  }
  return fold(hash, value.toString())
}

function toString(o: any) {
  return Object.prototype.toString.call(o)
}

export function sum(o: any) {
  return pad(foldValue(0, o, '', []).toString(16), 8)
}
