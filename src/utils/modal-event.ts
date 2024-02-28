export function messageId(e: MouseEvent, selector?: string): string | undefined {
  e.stopPropagation()
  let el = e.target as HTMLElement | null | undefined
  if (el === null || el === undefined) {
    return
  }

  selector = typeof selector !== 'undefined' ? selector : 'animate-children'

  let found: boolean = false
  let parent: HTMLElement | null | undefined
  let message: string = ''
  while (!found) {
    parent = el?.parentElement
    // presumes parent web component has dat-message attributes
    if (parent?.tagName.includes('-')) {
      if (parent?.dataset?.message) {
        message = parent.dataset.message
      }
    }
    if (parent?.tagName === selector?.toUpperCase()) {
      found = true
    }
    el = parent
  }
  return message
}
