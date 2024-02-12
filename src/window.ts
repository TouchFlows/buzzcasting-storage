import { IQuery } from './interfaces/IQuery'
import { IStorageManager } from './interfaces/IStorageManager'
import { getKey, moderation } from './helpers'
import { MESSAGES } from './constants'

export default class WindowClient {
	private subscribers: Array<any> = []
	private options: IStorageManager

	constructor(options: IStorageManager) {
		this.options = options
		window.BuzzCasting.WidgetData = new Set()
		// extend Storage in order to be able to store / read JSON objects
	}

	setCloud = async (query: IQuery, data: any) => {
		const key = getKey(query)
		return new Promise<any>(async resolve => {
			resolve((window.BuzzCasting.WidgetData[key] = data))
		})
	}

	getCloud = async (query: IQuery) => {
		const key = getKey(query)
		return new Promise<any>(async resolve => {
			resolve(window.localStorage.getObject(key))
		})
	}

	setSeries = async (query: IQuery, data: any) => {
		const key = getKey(query)
		return new Promise<any>(async resolve => {
			resolve(window.localStorage.setObject(key, data))
		})
	}

	getSeries = async (query: IQuery) => {
		const key = getKey(query)
		return new Promise<any>(async resolve => {
			resolve(window.localStorage.getObject(key))
		})
	}

	setMessages = async (query: IQuery, data: any) => {
		const key = getKey(query)
		return new Promise<any>(async resolve => {
			resolve(window.localStorage.setObject(key, data))
		})
	}

	getMessages = async (query: IQuery) => {
		const key = getKey(query)
		return new Promise<any>(async resolve => {
			resolve(window.localStorage.getObject(key))
		})
	}

	cleanMessages = async (_retentionDuration: number) => {
		console.log('cleanMessages not implemented for ', this.options.storage)
		return
	}

	setWidget = async (query: IQuery) => {
		let key = `widget.${query.widget}`
		return new Promise<any>(async resolve => {
			resolve(window.localStorage.setObject(key, query))
		})
	}

	subscribe = (query: IQuery) => {
		if (query.widget === undefined) {
      const info = query.topics?.split("-");
      query.dashboard = info ? info[0] : '';
      query.widget = info ? info[1] : '';
		}
		if (query.type === MESSAGES) {
			query = moderation(this.options, query)
		}
		const widgetExists = this.subscribers.filter(widget => widget.widget == query.widget)
		if (widgetExists.length) return
		this.subscribers.push(query)
	}

	getSubscribers(): any[] {
		return this.subscribers
	}
}
