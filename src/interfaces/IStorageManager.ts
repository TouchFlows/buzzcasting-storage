
export interface IStorageManager {
	app: string
	version: string
	storage: string // IStorage//'window' | 'keyval' | 'local' | 'session' | 'dexie'
	slide?: string
	presentation?: string
	token?: string
	bearer?: string //IAuthToken//'meta' | 'querystring' | 'cookie' | 'session' | 'db'
	csrf?: string
	moderation?: string //IModeration//'none' | 'before' | 'delayed' | 'approved'
	beforeTime?: string
	delay?: number
	period?: number
	retention?: number
}

// interface IStorage {
// 	storage: 'window' | 'keyval' | 'local' | 'session' | 'dexie'
// }

// interface IAuthToken {
// 	token: 'meta' | 'querystring' | 'cookie' | 'session' | 'db'
// }

// interface IModeration {
// 	moderation: 'none' | 'before' | 'delayed' | 'approved'
// }

