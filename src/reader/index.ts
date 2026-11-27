import type { IQuery, IResponse, IStorageOptions } from "buzzcasting-utils";
import type { StorageClient } from "../storage/factory.js";
import { API, CSS } from "buzzcasting-utils";
import { createStorageClient } from "../storage/factory.js";

export class BuzzcastingStorageReader {
	private sm: StorageClient | null;

	constructor(options: IStorageOptions) {
		this.sm = createStorageClient(options);
	}

	/**
	 * Retieve Cloud Data
	 * @param query Widgets parameters, type "cloud"
	 * @returns IResponse
	 */
	public getCloud = async (query: IQuery): Promise<IResponse> => {
		if (query.type !== API.CLOUD) {
			console.warn(
				"%cget%c %cstorage%c %ccloud",
				CSS.KO,
				CSS.NONE,
				CSS.STORAGE,
				CSS.NONE,
				CSS.CLOUD,
				query.widget,
				"wrong method call for getCloud, type used is",
				query.type,
			);
			return {
				data: null,
				message: `'wrong method call for getCloud, type used is ${query.type}`,
				success: false,
			};
		}
		return await this.sm?.getCloud(query);
	};

	/**
	 * Retieve Message Data
	 * @param query Widgets parameters, type "messages"
	 * @returns IResponse
	 */
	public getMessages = async (query: IQuery): Promise<IResponse> => {
		if (query.type !== API.MESSAGES) {
			console.warn(
				"%cget%c %cstorage%c %cmessages",
				CSS.KO,
				CSS.NONE,
				CSS.STORAGE,
				CSS.NONE,
				CSS.MESSAGES,
				query.widget,
				"wrong method call for getMessages, type used is",
				query.type,
			);
			return {
				data: null,
				message: `'wrong method call for getMessages, type used is ${query.type}`,
				success: false,
			};
		}
		return await this.sm?.getMessages(query);
	};

	/**
	 * Retrieve Series Data
	 * @param query Widgets parameters, type "series"
	 * @returns IResponse
	 */
	public getSeries = async (query: IQuery): Promise<IResponse> => {
		if (query.type !== API.SERIES) {
			console.warn(
				"%cget%c %cstorage%c %cseries",
				CSS.KO,
				CSS.NONE,
				CSS.STORAGE,
				CSS.NONE,
				CSS.SERIES,
				query.widget,
				"wrong method call for getSeries, type used is",
				query.type,
			);
			return {
				data: null,
				message: `'wrong method call for getSeries, type used is ${query.type}`,
				success: false,
			};
		}
		return await this.sm?.getSeries(query);
	};
}
