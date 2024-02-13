import type { IQuery } from './interfaces/IQuery'
import type { IStorageOptions } from './interfaces/IStorageOptions'

export default class ApiClient {
  private options: IStorageOptions
  private url: string

  constructor(options: IStorageOptions) {
    this.options = options
    this.url = `https://${options.app}.buzzcasting.net`
  }

  private auth() {
    // return authorization header with jwt token
    if (!this.options?.token) {
      return
    }

    let token: string = ''
    switch (this.options.token) {
      case 'meta':
        token = `Bearer ${this.options.bearer}`
        break
      default:
    }

    return {
      headers: new Headers({
        Authorization: token,
        // 'X-Session-Key': localStorage.getItem('guid') || 'invalid',
      }),
    }
  }

  private csrf = () => {
    if (!this.options?.csrf) {
      return
    }
    // return authorization header with jwt token
    return {
      headers: new Headers({
        'X-Csrf-Token': this.options?.csrf,
      }),
    }
  }

  public async get(query: IQuery): Promise<any> {
    const authHeader = this.auth()
    const csrfHeader = this.csrf()

    const headers = { ...authHeader, ...csrfHeader }

    const search = Object.assign({}, query)
    delete search.type
    const params
      = Object.keys(search).length > 0
        ? `?${new URLSearchParams(search).toString()}`
        : ''

    return await fetch(
      [this.url, 'api', this.options.version, query.type].join('/') + params,
      { ...headers, method: 'get' },
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
      .then((json) => {
        json.query = query
        return json
      })
      .catch((message) => {
        return { succes: false, message, data: [] }
      })
  }

  public async hideMessage(query: IQuery): Promise<any> {
    const { app, version }: IStorageOptions = this.options
    const args = this.auth()
    const params = '?action=visible'
    console.log(
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
