import { get, set } from 'idb-keyval'
import { IQuery } from './interfaces/IQuery'
import { getKey, moderation } from './helpers'
import { IStorageManager } from './interfaces/IStorageManager'

export default class KeyvalClient {
	private subscribers: Array<any> = []
	private options: IStorageManager

	constructor(options: IStorageManager) {
		this.options = options
	}

	setCloud = async (query: IQuery, data: any) => {
		const key = getKey(query)
		await set(key, data)
	}

	getCloud = async (query: IQuery) => {
		const key = getKey(query)
		return await get(key)
	}

	setSeries = async (query: IQuery, data: any) => {
		const key = getKey(query)
		await set(key, data)
	}

	getSeries = async (query: IQuery) => {
		const key = getKey(query)
		return await get(key)
	}

	setMessages = async (query: IQuery, data: any) => {
		const key = getKey(query)
		await set(key, data)
	}

	getMessages = async (query: IQuery) => {
		const key = getKey(query)
		return await get(key)
	}

	cleanMessages = async (_retentionDuration: number) => {
		console.log('cleanMessages not implemented for ', this.options.storage)
		return
	}

	subscribe = (query: IQuery) => {
		if (query.widget === undefined) {
			const info = query.topics?.split('-')
			query.dashboard = info ? info[0] : ''
			query.widget = info ? info[1] : ''
		}
		if (query.type === 'messages') {
			query = moderation(this.options, query)
		}
		const widgetExists = this.subscribers.filter(widget => widget.widget == query.widget)
		if (widgetExists.length) return
		this.subscribers.push(query)
	}

	getSubscribers() {
		return this.subscribers
	}
}
