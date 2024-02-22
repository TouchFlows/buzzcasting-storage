import type {
  IQuery,
  IResponse,
  IStorageOptions } from '..'
import {
  API_CSS,
  GET_DATA,
  NONE,
} from '..'

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
      API_CSS,
      NONE,
      GET_DATA,
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
    const { app, version }: IStorageOptions = this.options
    const args = this.headers()
    const params = '?action=visible'
    console.info(
      '%capi%c %cpost',
      API_CSS,
      NONE,
      GET_DATA,
      'hide',
      [app, 'api', version, query.type, query.id].join('/') + params,
      { ...args, method: 'put' },
    )
    return await fetch(
      [app, 'api', version, query.type, query.id].join('/') + params,
      { ...args, method: 'put' },
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