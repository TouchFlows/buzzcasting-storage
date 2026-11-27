import { IPreference, IQuery, IResponse, IStorageOptions } from 'buzzcasting-utils';
export default class KeyvalClient {
    subscribers: Array<any>;
    private options;
    constructor(options: IStorageOptions);
    getHash: (query: IQuery) => Promise<string>;
    setHash: (query: IQuery) => Promise<number | undefined>;
    createHash: (query: IQuery) => Promise<number | undefined>;
    clearHash: () => Promise<number | undefined>;
    deleteHash: (query: IQuery) => Promise<number | undefined>;
    getCloud: (query: IQuery) => Promise<any>;
    getSeries: (query: IQuery) => Promise<any>;
    getMessages: (query: IQuery) => Promise<any>;
    /**
     * Update Cloud
     * @param query IQuery
     * @param data
     * @returns number
     */
    setCloud: (query: IQuery, data: any) => Promise<number>;
    /**
     * Update Series
     * @param query IQuery
     * @param data
     * @returns bumber
     */
    setSeries: (query: IQuery, data: any) => Promise<number>;
    /**
     * Update Messages
     * @param query IQuery
     * @param data
     * @returns number
     */
    setMessages: (query: IQuery, data: any) => Promise<number>;
    cleanMessages: (_retentionDuration: number) => Promise<number>;
    hideMessage: (id: string, visible: number) => Promise<void>;
    approveMessage: (id: string, approved: number) => Promise<void>;
    getDashboard: (query: IQuery) => Promise<IResponse>;
    getDashboards: () => Promise<IResponse>;
    /**
     * Update Cloud
     * @param query IQuery
     * @returns number
     */
    setDashboard: (query: IQuery) => Promise<IResponse>;
    getWidget: (query: IQuery) => Promise<IResponse>;
    getWidgets: (query?: IQuery) => Promise<IResponse>;
    /**
     * Update Cloud
     * @param query IQuery
     * @returns number
     */
    setWidget: (query: IQuery) => Promise<IResponse>;
    deleteDashboard: (query: IQuery) => Promise<IResponse>;
    deleteDashboards: () => Promise<IResponse>;
    bulk: (table: string, queries: IQuery[]) => Promise<number | undefined>;
    get: (table: string, query: IQuery) => Promise<number | undefined>;
    set: (table: string, query: IQuery) => Promise<number | undefined>;
    deleteWidget: (query: IQuery) => Promise<number | undefined>;
    deleteWidgets: () => Promise<number | undefined>;
    deleteSlide: (query: IQuery) => Promise<number | undefined>;
    deleteSlides: () => Promise<number | undefined>;
    deletePresentation: (query: IQuery) => Promise<number | undefined>;
    deletePresentations: () => Promise<number | undefined>;
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
    getSlide: (query: IQuery) => Promise<IResponse>;
    getSlides: (query: IQuery) => Promise<IResponse>;
    /**
     * Update Slide
     * @param query IQuery
     * @returns number
     */
    setSlide: (query: IQuery) => Promise<IResponse>;
    getPresentation: (query: IQuery) => Promise<IResponse>;
    getPresentations: () => Promise<IResponse>;
    /**
     * Update Presentation
     * @param query IQuery
     * @returns number
     */
    setPresentation: (query: IQuery) => Promise<IResponse>;
    getPreference: (preference: IPreference) => Promise<IResponse>;
    getPreferences: () => Promise<IResponse>;
    /**
     * Update Preference
     * @param preference IPreference
     * @returns number
     */
    setPreference: (preference: IPreference) => Promise<IResponse>;
    getImages: (query: IQuery) => Promise<{
        data: null;
        message: string;
        success: boolean;
    }>;
    setImage: (query: IQuery) => Promise<{
        data: null;
        message: string;
        success: boolean;
    }>;
}
//# sourceMappingURL=keyval.d.ts.map