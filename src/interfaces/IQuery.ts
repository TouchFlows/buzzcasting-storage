export interface IQuery {
	[x: string]: any
	topics?: string
	dashboard?: string
	widget?: string
	compare?: string
	period?: number
	type?: 'cloud' | 'messages' | 'indicators' | 'proxy'
	order?: string
	media?: number
	dynamics?: number
	geo?: number
	delay?: string
	approved?: string
	moderation?: 'realtime' | 'delayed' | 'approved'
	hrm?: string
	before?: number
	since?: number
}
