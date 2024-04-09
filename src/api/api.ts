import type { IQuery, IResponse, IStorageOptions } from '..'
import { CSS, EVENTS } from '..'

export default class ApiClient {
  private options: IStorageOptions
  private url: string

  constructor(options: IStorageOptions) {
    this.options = options
    this.url = `https://${options.app}.buzzcasting.net`
  }

  private headers = () => {
    const token = `Bearer ${this.options.bearer}`
    return {
      headers: new Headers({
        Authorization: token,
        Accept: 'application/json',
        // 'X-Session-Key': localStorage.getItem('guid') || 'invalid',
      }),
    }
  }

  private formHeaders = () => {
    const token = `Bearer ${this.options.bearer}`
    return {
      headers: new Headers({
        'Authorization': token,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        // 'X-Session-Key': localStorage.getItem('guid') || 'invalid',
      }),
    }
  }

  public async get(query: IQuery): Promise<IResponse> {
    const { version }: IStorageOptions = this.options
    const headers = this.headers()

    const search = Object.assign({}, query)
    delete search.slide
    delete search.type
    delete search.hash
    const params
			= Object.keys(search).length > 0
			  ? `?${new URLSearchParams(search).toString()}`
			  : ''
    console.debug(
      '%capi%c %cget',
      CSS.API,
      CSS.NONE,
      CSS.GET_DATA,
      query.slide,
      query.widget,
    )
    return await fetch(
      [this.url, 'api', version, query.type].join('/') + params,
      { ...headers, method: 'get' },
    )
      .then(async (response: Response) => {
        if (!response.ok) {
          throw new Error(`${response.status}`)
        }
        return response
      })
      .then((response: Response) => {
        return response.json()
      })
      .then((json: IResponse): IResponse => {
        json.query = query
        return json
      })
      .catch((code) => {
        return { success: false, message: `${code}`, data: null }
      })
  }

  public async hideMessage(query: IQuery): Promise<any> {
    const { version }: IStorageOptions = this.options
    const headers = this.headers()
    const params = '?action=visible'
    console.info(
      '%capi%c %cput',
      CSS.API,
      CSS.NONE,
      CSS.GET_DATA,
      EVENTS.HIDE_MESSAGE,
      query.widget,
      query.id,
    )
    return await fetch(
      [this.url, 'api', version, query.type, query.id].join('/') + params,
      { ...headers, method: 'put' },
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response
      })
      .then((response) => {
        return response.json()
      })
      .catch((message) => {
        return { succes: false, message, data: [] }
      })
  }

  public async hideLabels(query: IQuery): Promise<any> {
    const { version }: IStorageOptions = this.options
    const headers = this.formHeaders()
    const urlencoded = new URLSearchParams()
    const labels = query.labels || []
    for (const [i, value] of labels.entries()) {
      urlencoded.append(`custom_filters[${i}]`, value)
    }
    // const body = JSON.stringify(query.labels)

    console.info(
      '%capi%c %cput',
      CSS.API,
      CSS.NONE,
      CSS.GET_DATA,
      EVENTS.HIDE_LABELS,
      query.widget,
      labels,
    )
    return await fetch(
      [this.url, 'api', version, query.type, query.widget].join('/'),
      { ...headers, body: urlencoded, method: 'put' },
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response
      })
      .then((response) => {
        return response.json()
      })
      .catch((message) => {
        return { succes: false, message, data: [] }
      })
  }
}
