import { IPreference, IQuery, IResponse, IStorageOptions } from 'buzzcasting-utils';
export default class DexieClient {
    private db;
    subscribers: Array<any>;
    private options;
    constructor(options: IStorageOptions);
    getHash: (query: IQuery) => Promise<string>;
    setHash: (query: IQuery) => Promise<number>;
    clearHash: () => Promise<number>;
    deleteHash: (query: IQuery) => Promise<number>;
    createHash: (query: IQuery) => Promise<number>;
    /**
     * Retrieve Cloud Data
     * @param query IQuery
     * @returns IResponse
     */
    getCloud: (query: IQuery) => Promise<IResponse>;
    /**
     * Update Cloud
     * @param query IQuery
     * @param data
     * @returns number
     */
    setCloud: (query: IQuery, data: any) => Promise<number>;
    bulk: (table: string, queries: IQuery[]) => Promise<IResponse>;
    get: (table: string, query: IQuery) => Promise<IResponse>;
    set: (table: string, query: IQuery) => Promise<IResponse>;
    getDashboard: (query: IQuery) => Promise<IResponse>;
    getDashboards: (query?: IQuery) => Promise<any>;
    /**
     * Update Dashboard
     * @param query IQuery
     * @returns number
     */
    setDashboard: (query: IQuery) => Promise<IResponse>;
    deleteDashboard: (query: IQuery) => Promise<IResponse>;
    deleteDashboards: () => Promise<IResponse | undefined>;
    /**
     * Wipe Message data after expires timestamp
     */
    cleanMessages: () => Promise<number>;
    /**
     * Retrieve Messages Data
     * @param query IQuery
     * @returns IResponse
     */
    getMessages: (query: IQuery) => Promise<IResponse>;
    hideMessage: (id: string, visible: number) => Promise<void>;
    approveMessage: (id: string, approved: number) => Promise<void>;
    /**
     * Update Messages
     * @param query IQuery
     * @param data any
     * @returns number
     */
    setMessages: (query: IQuery, data: any) => Promise<number>;
    /**
     * Retrieve Series Data
     * @param query IQuery
     * @returns IResponse
     */
    getSeries: (query: IQuery) => Promise<IResponse>;
    /**
     * Update Series
     * @param query IQuery
     * @param data
     * @returns number
     */
    setSeries: (query: IQuery, data: any) => Promise<number>;
    /**
     * Retrieve Widget from Storage
     * @param query IQuery
     * @returns IResponse
     */
    getWidget: (query: IQuery) => Promise<IResponse>;
    /**
     * Retrieve Widgets from Storage
     * @param query IQuery
     * @returns IResponse
     */
    getWidgets: (query?: IQuery) => Promise<IResponse>;
    /**
     * Update Cloud
     * @param query IQuery
     * @returns number
     */
    setWidget: (query: IQuery) => Promise<IResponse>;
    deleteWidget: (query: IQuery) => Promise<IResponse | undefined>;
    deleteWidgets: () => Promise<IResponse | undefined>;
    /**
     * Add component subscriber
     * @param query IQuery
     * @returns null
     */
    subscribe: (query: IQuery) => null;
    /**
     * Get current subscribers
     * @returns IQuery[]
     */
    getSubscribers: () => Promise<IQuery[]>;
    /**
     * Retrieve Slide from Storage
     * @param query IQuery
     * @returns IResponse
     */
    getSlide: (query: IQuery) => Promise<IResponse>;
    /**
     * Retrieve Slides from Storage
     * @param query IQuery
     * @returns IResponse
     */
    getSlides: (query: IQuery) => Promise<IResponse>;
    /**
     * Update Slide in Storage
     * @param query IQuery
     * @returns number
     */
    setSlide: (query: IQuery) => Promise<IResponse>;
    deleteSlide: (query: IQuery) => Promise<IResponse | undefined>;
    deleteSlides: () => Promise<IResponse | undefined>;
    /**
     * Retrieve Presentation from Storage
     * @param query IQuery
     * @returns IResponse
     */
    getPresentation: (query: IQuery) => Promise<IResponse>;
    /**
     * Retrieve Presentations from Storage
     * @param query IQuery
     * @returns IResponse
     */
    getPresentations: (query?: IQuery) => Promise<IResponse>;
    /**
     * Update Presentation in Storage
     * @param query IQuery
     * @returns number
     */
    setPresentation: (query: IQuery) => Promise<IResponse>;
    deletePresentation: (query: IQuery) => Promise<IResponse | undefined>;
    deletePresentations: () => Promise<IResponse | undefined>;
    /**
     * Retrieve Preference from Storage
     * @param preference IPreference
     * @returns IResponse
     */
    getPreference: (preference: IPreference) => Promise<IResponse>;
    /**
     * Retrieve Preferences from Storage
     * @param query IQuery
     * @returns IResponse
     */
    getPreferences: (query?: IQuery) => Promise<IResponse>;
    /**
     * Update Preference in Storage
     * @param preference IPreference
     * @returns number
     */
    setPreference: (preference: IPreference) => Promise<IResponse>;
    deletePreference: (query: IQuery) => Promise<IResponse | undefined>;
    /**
     * Retrieve List of Images from Storage
     * @param query IQuery
     * @returns IResponse
     */
    getImages: (query?: IQuery) => Promise<IResponse>;
    /**
     * Update Image in Storage
     * @param query IQuery
     * @returns number
     */
    setImage: (query: IQuery) => Promise<IResponse>;
}
//# sourceMappingURL=dexie.d.ts.map