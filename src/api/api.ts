import type {
	IApiResponse,
	IDashboard,
	IImage,
	IPreference,
	IQuery,
	IResponse,
	IStorageOptions,
} from "buzzcasting-utils";
import { API, CSS, EVENTS, log } from "buzzcasting-utils";

export default class ApiClient {
	private options: IStorageOptions;
	private url: string;

	constructor(options: IStorageOptions) {
		this.options = options;
		this.url = `https://${options.app}.buzzcasting.net`;
	}

	private headers = () => {
		const token = `Bearer ${this.options.bearer}`;
		return {
			headers: new Headers({
				Authorization: token,
				Accept: "application/json",
				// 'Cache-Control': 'no-cache',
				// 'X-Session-Key': localStorage.getItem('guid') || 'invalid',
			}),
		};
	};

	private fileHeaders = () => {
		const token = `Bearer ${this.options.bearer}`;
		return {
			headers: new Headers({
				Authorization: token,
			}),
		};
	};

	private formHeaders = () => {
		const token = `Bearer ${this.options.bearer}`;
		return {
			headers: new Headers({
				Authorization: token,
				"Content-Type": "application/x-www-form-urlencoded",
				Accept: "application/json",
				// 'X-Session-Key': localStorage.getItem('guid') || 'invalid',
			}),
		};
	};

	public async get(query: IQuery): Promise<IResponse> {
		const { version }: IStorageOptions = this.options;
		const headers = this.headers();

		const search: IQuery = Object.assign({}, query);
		delete search.type;
		delete search.hash;
		delete search.order;
		search.topics = `${search.dashboard}-${search.widget}`;
		//delete search.period;
		delete search.presentation;
		const params =
			Object.keys(search).length > 0
				? `?${new URLSearchParams(search).toString()}`
				: "";
		let color: string = "";
		switch (query.type) {
			case API.MESSAGES:
				color = CSS.MESSAGES;
				break;
			case API.SERIES:
				color = CSS.SERIES;
				break;
			case API.CLOUD:
				color = CSS.CLOUD;
				break;
		}
		log(3, [
			`%cfetch%c %capi%c %c${query.type}`,
			CSS.OK,
			CSS.NONE,
			CSS.API,
			CSS.NONE,
			color,
			query.widget,
		]);
		log(4, [query.type, search]);

		return await fetch(
			[this.url, "api", version, query.type].join("/") + params,
			{ ...headers, method: "get" }
		)
			.then(async (response: Response) => {
				if (!response.ok) {
					throw new Error(`${response.status}`);
				}
				return response;
			})
			.then((response: Response) => {
				return response.json();
			})
			.then((json: IResponse): IResponse => {
				json.query = query;
				return json;
			})
			.catch((code) => {
				return { success: false, message: `${code}`, data: null, query: query };
			});
	}

	public async hideMessage(query: IQuery): Promise<any> {
		const { version }: IStorageOptions = this.options;
		const headers = this.headers();
		const params = "?action=visible";
		console.info(
			"%capi%c %cput",
			CSS.API,
			CSS.NONE,
			CSS.GET_DATA,
			EVENTS.HIDE_MESSAGE,
			query.widget,
			query.id
		);
		return await fetch(
			[this.url, "api", version, "messages", query.id].join("/") + params,
			{ ...headers, method: "put" }
		)
			.then((response) => {
				if (!response.ok) {
					throw new Error(response.statusText);
				}
				return response;
			})
			.then((response) => {
				return response.json();
			})
			.catch((message) => {
				return { succes: false, message, data: [] };
			});
	}

	public async hideLabels(query: IQuery): Promise<any> {
		const { version }: IStorageOptions = this.options;
		const headers = this.formHeaders();
		const urlencoded = new URLSearchParams();
		const labels = query.labels || [];
		for (const [i, value] of labels.entries()) {
			urlencoded.append(`custom_filters[${i}]`, value);
		}
		// const body = JSON.stringify(query.labels)

		console.info(
			"%capi%c %cput",
			CSS.API,
			CSS.NONE,
			CSS.GET_DATA,
			EVENTS.HIDE_LABELS,
			query.widget,
			labels
		);
		return await fetch(
			[this.url, "api", version, query.type, query.widget].join("/"),
			{ ...headers, body: urlencoded, method: "put" }
		)
			.then((response) => {
				if (!response.ok) {
					throw new Error(response.statusText);
				}
				return response;
			})
			.then((response) => {
				return response.json();
			})
			.catch((message) => {
				return { succes: false, message, data: [] };
			});
	}

	public async loadSlide(query: IQuery): Promise<any> {
		const { version }: IStorageOptions = this.options;
		const headers = this.headers();

		const search = Object.assign({}, query);
		delete search.type;
		delete search.hash;
		// const params
		// 	= Object.keys(search).length > 0
		// 	  ? `?${new URLSearchParams(search).toString()}`
		// 	  : ''
		log(3, [
			"%cload%c %capi%c %c %clide",
			CSS.OK,
			CSS.NONE,
			CSS.API,
			CSS.NONE,
			CSS.SLIDE,
			query.id,
		]);
		return await fetch(
			[this.url, "api", version, "slides", query.id].join("/"),
			{ ...headers, method: "get" }
		)
			.then(async (response: Response) => {
				if (!response.ok) {
					throw new Error(`${response.status}`);
				}
				return response;
			})
			.then((response: Response) => {
				return response.json();
			})
			.then((json: IResponse): IResponse => {
				let res: any | any[];
				//@ts-ignore
				query.type = "slides";
				json.query = query;

				if (json?.data) {
					//@ts-ignore

					if (Array.isArray(json.data)) {
						res = structuredClone(json.data);

						res.forEach((slide: any) => {
							if (typeof slide.json === "string") {
								slide.json = JSON.parse(slide.json);
							}
						});
					} else {
						// Single slide
						res = structuredClone(json.data);
						res.json = JSON.parse(res.json);
					}
					// @ts-ignore
					json.data = res;
				}

				// @ts-ignore
				// if (json.data && json.data.json) {
				// 	// @ts-ignore
				// 	json.data.json = JSON.parse(json.data.json);
				// }
				return json;
			})
			.catch((code) => {
				return { success: false, message: `${code}`, data: null };
			});
	}
	/**
	 * Store slide definition
	 * ex: window.BuzzCasting.storage.storeSlide({id:'1',type:'slide', data: {json: {a:'b'},html:'<div/>',css:'abc'}, update: true}) // update: stockage sur le serveur
	 *
	 * @param query
	 * @returns
	 */

	public async storeSlide(query: IQuery): Promise<any> {
		const { version }: IStorageOptions = this.options;
		const headers = this.formHeaders();
		/* const urlencoded = new URLSearchParams()
    const labels = query.labels || []
    for (const [i, value] of labels.entries()) {
      urlencoded.append(`custom_filters[${i}]`, value)
    } */
		delete query.update;
		delete query.type;
		const body = JSON.stringify(query);

		log(3, [
			"%cput%c %capi%c %cslide",
			CSS.OK,
			CSS.NONE,
			CSS.API,
			CSS.NONE,
			CSS.SLIDE,
			EVENTS.SLIDE_STORE,
			query.id,
		]);
		return await fetch(
			[this.url, "api", version, "slides", query.id].join("/"),
			{ ...headers, body, method: "put" }
		)
			.then((response) => {
				if (!response.ok) {
					throw new Error(response.statusText);
				}
				return response;
			})
			.then((response) => {
				return response.json();
			})
			.catch((message) => {
				return { succes: false, message, data: [] };
			});
	}

	public async loadPresentation(query: IQuery): Promise<any> {
		const { version }: IStorageOptions = this.options;
		const headers = this.headers();
		delete query.update;

		log(3, [
			"%cload%c %capi%c %cpresentation",
			CSS.OK,
			CSS.NONE,
			CSS.API,
			CSS.NONE,
			CSS.PRESENTATION,
			query.id,
		]);
		return await fetch(
			[this.url, "api", version, API.PRESENTATIONS, query.id].join("/"),
			{ ...headers, method: "get" }
		)
			.then(async (response: Response) => {
				if (!response.ok) {
					throw new Error(`${response.status}`);
				}
				return response;
			})
			.then((response: Response) => {
				return response.json();
			})
			.then((json: IResponse): IResponse => {
				let res: any | any[];
				//@ts-ignore
				query.type = "presentations";
				json.query = query;

				if (json?.data) {
					//@ts-ignore
					res = structuredClone(json.data);

					// @ts-ignore
					json.data = res;
				}

				return json;
			})
			.catch((code) => {
				return { success: false, message: `${code}`, data: null };
			});
	}
	/**
	 * Store slide definition
	 * ex: window.BuzzCasting.storage.storeSlide({id:'1',type:'slide', data: {json: {a:'b'},html:'<div/>',css:'abc'}, update: true}) // update: stockage sur le serveur
	 *
	 * @param query
	 * @returns
	 */

	public async storePresentation(query: IQuery): Promise<any> {
		const { version }: IStorageOptions = this.options;
		const headers = this.formHeaders();

		delete query.update;
		const body = JSON.stringify(query);

		log(2, ["%capi%c %cput", CSS.API, CSS.NONE, CSS.PRESENTATION, query.name]);
		return await fetch(
			[this.url, "api", version, API.PRESENTATIONS, query.id].join("/"),
			{ ...headers, body, method: "put" }
		)
			.then((response) => {
				if (!response.ok) {
					throw new Error(response.statusText);
				}
				return response;
			})
			.then((response) => {
				return response.json();
			})
			.catch((message) => {
				return { succes: false, message, data: [] };
			});
	}

	public async loadPreference(preference: IPreference): Promise<any> {
		const { version }: IStorageOptions = this.options;
		const headers: { headers: Headers } = this.headers();

		// const params
		// 	= Object.keys(search).length > 0
		// 	  ? `?${new URLSearchParams(search).toString()}`
		// 	  : ''
		log(3, [
			"%cload%c %capi%c %cpreference",
			CSS.OK,
			CSS.NONE,
			CSS.API,
			CSS.NONE,
			CSS.APP,
			preference.id,
		]);
		return await fetch(
			[this.url, "api", version, API.PREFERENCES, preference.id].join("/"),
			{ ...headers, method: "get" }
		)
			.then(async (response: Response) => {
				if (!response.ok) {
					throw new Error(`${response.status}`);
				}
				return response;
			})
			.then((response: Response) => {
				return response.json();
			})
			.then((json: IResponse): IResponse => {
				//@ts-ignore
				preference.type = "preference";
				//@ts-ignore
				json.query = preference;
				return json;
			})
			.catch((code) => {
				return { success: false, message: `${code}`, data: null };
			});
	}

	public async storePreference(preference: IPreference): Promise<any> {
		const { version }: IStorageOptions = this.options;
		const headers = this.formHeaders();

		delete preference.update;
		const body = JSON.stringify({ data: preference });

		console.info(
			"%capi%c %cstorePreference",
			CSS.API,
			CSS.NONE,
			CSS.APP,
			preference.id
		);
		return await fetch(
			[this.url, "api", version, API.PREFERENCES, preference.id].join("/"),
			{ ...headers, body, method: "put" }
		)
			.then((response) => {
				if (!response.ok) {
					throw new Error(response.statusText);
				}
				return response;
			})
			.then((response) => {
				return response.json();
			})
			.catch((message) => {
				return { succes: false, message, data: [] };
			});
	}

	public async loadDashboards(query?: IQuery): Promise<any> {
		const { version }: IStorageOptions = this.options;
		const headers = this.headers();

		log(3, ["%capi%c %cdashboards", CSS.API, CSS.NONE, CSS.WIDGET]);
		return await fetch(
			[this.url, "api", version, API.WIDGETS, query?.id || ""].join("/"),
			{
				...headers,
				method: "get",
			}
		)
			.then(async (response: Response) => {
				if (!response.ok) {
					throw new Error(`${response.status}`);
				}
				return response;
			})
			.then((response: Response) => {
				return response.json();
			})
			.then((json: IDashboard[]): IResponse => {
				return {
					data: { dashboards: json },
					message: "Dashboard Widgets loaded from api",
					success: true,
				};
			})
			.catch((code) => {
				return { success: false, message: `${code}`, data: null };
			});
	}

	public async loadImages(folderName: string): Promise<any> {
		const { version }: IStorageOptions = this.options;
		const headers = this.headers();

		console.info(
			"%cload%c %capi%c %cimage",
			CSS.OK,
			CSS.NONE,
			CSS.API,
			CSS.NONE,
			CSS.WIDGET
		);
		return await fetch(
			`${[this.url, "api", version, API.IMAGES].join(
				"/"
			)}?folder=${folderName}`,
			{
				...headers,
				method: "get",
			}
		)
			.then(async (response: Response) => {
				if (!response.ok) {
					throw new Error(`${response.status}`);
				}
				return response;
			})
			.then((response: Response): IApiResponse => {
				const resp = response.json() as unknown;
				const json: IApiResponse = resp as IApiResponse;
				return json;
			})
			.then((json: IApiResponse): IResponse => {
				const imgArray = json.data as IImage[];
				return {
					data: { images: imgArray },
					message: "Images loaded via api",
					success: true,
				};
			})
			.catch((code) => {
				return { success: false, message: `${code}`, data: null };
			});
	}

	public async storeImage(imageFile: FormData): Promise<any> {
		const { version }: IStorageOptions = this.options;
		const headers = this.fileHeaders();

		const body = imageFile;

		console.info(
			"%capi%c %cstoreImage",
			CSS.API,
			CSS.NONE,
			CSS.WIDGET,
			imageFile.get("name")
		);
		return await fetch(
			`${[this.url, "api", version, API.IMAGES].join(
				"/"
			)}?folder=${imageFile.get("folder")}`,
			{
				...headers,
				body,
				method: "post",
			}
		)
			.then((response) => {
				if (!response.ok) {
					throw new Error(response.statusText);
				}
				return response;
			})
			.then((response) => {
				return response.json();
			})
			.catch((message) => {
				return { succes: false, message, data: [] };
			});
	}

	public async deleteImage(
		folderName: string,
		imageName: string
	): Promise<any> {
		const { version }: IStorageOptions = this.options;
		const headers = this.formHeaders();

		console.info(
			"%capi%c %cdeleteImage",
			CSS.API,
			CSS.NONE,
			CSS.WIDGET,
			imageName
		);
		return await fetch(
			`${[this.url, "api", version, API.IMAGES, imageName].join(
				"/"
			)}?folder=${folderName}`,
			{ ...headers, method: "delete" }
		)
			.then((response) => {
				if (!response.ok) {
					throw new Error(response.statusText);
				}
				return response;
			})
			.then((response) => {
				return response.json();
			})
			.catch((message) => {
				return { succes: false, message, data: [] };
			});
	}
}
