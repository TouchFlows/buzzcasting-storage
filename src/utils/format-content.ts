import type { IMessage } from '..'

export function formatContent(message: IMessage): string {
  return `${
		message.title.length > 0 ? `<p><strong>${message.title}</strong></p>` : ''
	}${message.content.replace(/\n\n/g, '\n').replace(/\n/g, '<br/>')}`
}
