import type { IMessage } from '..'

export function sanitize(messages: IMessage[]): IMessage[] {
  messages.forEach((message: IMessage) => {
    // remove all links
    message.content = message.content?.replace(/(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)((\?.*)?)/g, '') || '' /* eslint-disable-line regexp/no-misleading-capturing-group */

    if (message.sender !== null) {
      if (message.sender?.title === 'Unknown author' || message.sender?.title === null) {
        message.sender.title = ''
      }
      if (message.sender?.name !== '' && message.sender.title === '') {
        message.sender.title = message.sender.name
      }
      if (message.sender?.name !== '' && message.channel === 'tw') {
        message.sender.name = `@${message.sender.name}`
      }
    } else {
      message.sender = { title: '', name: '', id: '', avatar: 'default', bio: '', location: '', following: 0, verified: 0, listed: 0, followers: 0, favourites: 0, messages: 0, influence: 0 }
    }

    if (message.sender.title === '' && message.link !== '') {
      const domain = new URL(message.link)
      message.sender.title = domain.hostname.replace('www.', '')
    }
  })
  return messages
}
