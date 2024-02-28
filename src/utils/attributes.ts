interface IFilteredAttributes {
  [x: string]: string
}

export function filterAttributes(attributes: NamedNodeMap): IFilteredAttributes {
  const filteredAttributes: IFilteredAttributes = {}

  for (let i = 0; i < attributes.length; i++) {
    const attribute = attributes[i]
    if (attribute.name !== 'class' && !attribute.name.includes('data')) {
      filteredAttributes[attribute.name] = attribute.value
    }
  }
  return filteredAttributes
}
