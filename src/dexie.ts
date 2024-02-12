import Dexie from 'dexie';
import { IQuery } from './interfaces/IQuery'
import { Message } from './interfaces/IMessages'
import { moderation } from './helpers'
import { IStorageManager } from './interfaces/IStorageManager'
import { CLOUD, MESSAGES, SERIES, TOPICS } from './constants';

export default class DexieClient {
	private db: Dexie
	private subscribers: Array<any> = []
	private options: IStorageManager

	constructor(options: IStorageManager) {
		this.options = options

		this.db = new Dexie(options.app)
		this.db.version(2).stores({
			player: 'id,title,name,location',
			monitor: 'id,player_id,cols,rows,order,width,height,physicalwidth,physicalheight,devicePixelRatio,screenLeft,screenTop,orientation,monitor',
			display: 'id,monitor_id,presentation_id,colstart,colend,rowstart,rowend',
			channel: 'id,slide_index',
			presentation: 'id,name,data',
			cloud: 'id,dashboard_id,data',
			messages: 'id,utc,visible,data',
			series: 'id,dashboard_id,data',
			topics: '[widget_id+message_id],widget_id,dashboard_id,title,engagement,impressions,reach,sentiment,visible,utc',
			widgets: 'id,dashboard_id,type',
		})
		this.db.open()
	}

	setCloud = async (query: IQuery, data: string) => {
		if (data !== '') {
			await this.db.table('cloud').put({
				id: query.widget,
				dashboard_id: query.dashboard,
				data: data,
			})
		}
	}

	getCloud = async (query: IQuery) => {
		const cloud = await this.db.table(CLOUD).where({ id: query.widget }).last()
		cloud.presentation = query?.presentation || 'not set'
		cloud.slide = query?.slide || 'not set'
		return cloud ?? { data: null }
	}

	setSeries = async (query: IQuery, data: any) => {
		if (data !== '') {
			await this.db.table(SERIES).put({
				id: query.widget,
				dashboard_id: query.dashboard,
				data: data.data,
			})
		}
	}

	getSeries = async (query: IQuery) => {
		const series = await this.db.table(SERIES).where({ id: query.widget }).last()
		series.presentation = query?.presentation || 'not set'
		series.slide = query?.slide || 'not set'
		return series ?? { data: null }
	}

	setMessages = async (query: IQuery, data: { title: any; messages: Message[] }) => {
		const title = data.title
		data.messages.forEach((message: Message) => {
			this.db.table(MESSAGES).put({ id: message.id, utc: message.utc, data: message })
			this.db.table(TOPICS).put({
				widget_id: query.widget,
				message_id: message.id,
				dashboard_id: query.dashboard,
				title,
				engagement: message.dynamics?.engagement,
				impressions: message.dynamics?.semrush_visits,
				reach: message.dynamics?.potential_reach,
				sentiment: message.topics[0].sentiment,
				utc: message.utc,
			})
		})
	}

	getMessages = async (query: IQuery) => {
		const widgetFilter = (topic: { widget_id: string }) => topic.widget_id === query.widget

		const sinceFilter = (topic: { utc: number }) => topic.utc > (query?.since || 0)

		const visibleFilter = (topic: { visible: number }) => !topic.hasOwnProperty('visible') || topic?.visible !== 0

		const topicMessages: any = await this.db
			.table('topics')
			.orderBy('utc')
			.reverse()
			.filter(widgetFilter)
			.filter(sinceFilter)
			.filter(visibleFilter)
			.limit(query?.limit ?? 25)
			.toArray()

		const title = topicMessages[0].title || 'No results'

		const messageIds = topicMessages.map((message: { message_id: any; }) => message.message_id)

		// may not come back in order of call, so need to sort
		const messages = await this.db
			.table('messages')
			.where('id')
			.anyOf(messageIds)
			.toArray()
			.then(messages => {
				return messages.sort(function (a, b) {
					return b.utc - a.utc
				})
			})

		return {
			data: {
				presentation: query?.presentation || 'not set',
				slide: query?.slide || 'not set',
				messages: messages.map(message => message.data),
				title,
				topics: [query.dashboard, query.widget].join('-'),
				query,
			},
		}
	}

	cleanMessages = async (retentionDuration: number) => {
		const currentDate = Date.now() / 1000

		const beforeFilter = (topic: { utc: number }) => topic.utc < retentionDuration - currentDate

		await this.db
			.table('topics')
			.orderBy('utc')
			.filter(beforeFilter)
			.modify((_message, ref) => {
				delete ref.value
			})
	}

	subscribe = (query: IQuery) => {
		if (query.widget === undefined) {
			const info = query.topics?.split('-')
			query.dashboard = info ? info [0] : ''
			query.widget = info ? info[1] : ''
		}
		const exists = this.subscribers.filter(widget => widget.widget == query.widget).length
		if (exists > 0) return
		if (query.type === MESSAGES) {
			query = moderation(this.options, query)
		}
		console.log('[storage] subscribe', query)
		this.subscribers.push(query)
	}

	getSubscribers() {
		return this.subscribers
	}
}
