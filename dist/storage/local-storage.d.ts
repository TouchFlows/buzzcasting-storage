import { IPreference, IQuery, IResponse, IStorageOptions } from 'buzzcasting-utils';
export default class LocalStorageClient {
    subscribers: Array<any>;
    private options;
    constructor(options: IStorageOptions);
    getHash: (query: IQuery) => Promise<string>;
    setHash: (query: IQuery) => Promise<number | undefined>;
    createHash: (query: IQuery) => Promise<number | undefined>;
    clearHash: () => Promise<number | undefined>;
    deleteHash: (query: IQuery) => Promise<number | undefined>;
    getCloud: (query: IQuery) => Promise<IResponse>;
    getSeries: (query: IQuery) => Promise<IResponse>;
    getMessages: (query: IQuery) => Promise<IResponse>;
    bulk: (table: string, queries: IQuery[]) => Promise<number | undefined>;
    get: (table: string, query: IQuery) => Promise<number | undefined>;
    set: (table: string, query: IQuery) => Promise<number | undefined>;
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
     * @returns number
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
    setDashboard: (query: IQuery) => Promise<{
        data: null;
        message: string;
        success: boolean;
    }>;
    deleteDashboard: (query: IQuery) => Promise<number | undefined>;
    deleteDashboards: () => Promise<number | undefined>;
    getWidget: (query: IQuery) => Promise<IResponse>;
    getWidgets: () => Promise<IResponse>;
    setWidget: (query: IQuery) => Promise<{
        data: null;
        message: string;
        success: boolean;
    }>;
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
    setSlide: (query: IQuery) => Promise<IResponse>;
    getPresentation: (query: IQuery) => Promise<IResponse>;
    getPresentations: () => Promise<IResponse>;
    setPresentation: (query: IQuery) => Promise<IResponse>;
    getPreference: (preference: IPreference) => Promise<IResponse>;
    getPreferences: () => Promise<IResponse>;
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
//# sourceMappingURL=local-storage.d.ts.map