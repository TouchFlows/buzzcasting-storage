import { IModal } from 'buzzcasting-utils';
import { IPreference } from 'buzzcasting-utils';
import { IQuery } from 'buzzcasting-utils';
import { IResponse } from 'buzzcasting-utils';
import { IStorageOptions } from 'buzzcasting-utils';

export declare class BuzzcastingStorageManager {
    private sm;
    private api;
    private bc;
    private options;
    private subscribers;
    constructor(options: IStorageOptions);
    addSubscriber(query: IQuery): void;
    deleteSubscriber(query: IQuery): void;
    update: (data: any) => Promise<void>;
    stream: () => void;
    apiQuery: (apiQuery: any) => Promise<IprocessResponse>;
    processResponse: (apiResp: any) => Promise<IprocessResponse>;
    startBroadcastListener: () => void;
    broadcastMessage: (eventName: string, detail: any) => void;
    private broadcastUpdate;
    hide: (query: IQuery) => void;
    private actions;
    cleanMessages: () => Promise<void>;
    hideMessage: (query: IQuery) => Promise<IResponse>;
    hideLabels: (query: IQuery) => Promise<IResponse>;
    getSubscribers: () => Promise<any[]>;
    deleteSubscribers: () => Promise<any[]>;
    getSlide: (query: IQuery) => Promise<IResponse | undefined>;
    getSlides: (query: IQuery) => Promise<IResponse | undefined>;
    setSlide: (query: IQuery) => Promise<IResponse | undefined>;
    loadSlide: (query: IQuery) => Promise<number>;
    storeSlide: (query: IQuery) => Promise<IResponse | number>;
    deleteSlide: (query: IQuery) => Promise<IResponse | number | undefined>;
    deleteSlidens: (query: IQuery) => Promise<IResponse | number | undefined>;
    getPresentation: (query: IQuery) => Promise<IResponse | undefined>;
    getPresentations: (query?: IQuery) => Promise<IResponse | undefined>;
    setPresentation: (query: IQuery) => Promise<IResponse | undefined>;
    loadPresentation: (query: IQuery) => Promise<number>;
    storePresentation: (query: IQuery) => Promise<IResponse | number>;
    deletePresentation: (query: IQuery) => Promise<IResponse | number | undefined>;
    deleteWPresentations: (query: IQuery) => Promise<IResponse | number | undefined>;
    getPreference: (preference: IPreference) => Promise<IResponse | undefined>;
    getPreferences: (query?: IQuery) => Promise<IResponse | undefined>;
    setPreference: (preference: IPreference) => Promise<IResponse | undefined>;
    loadPreference: (preference: IPreference) => Promise<IResponse | undefined>;
    storePreference: (preference: IPreference) => Promise<IResponse | number>;
    getWidget: (query: IQuery) => Promise<IResponse | undefined>;
    getWidgets: (query?: IQuery) => Promise<IResponse | undefined>;
    setWidget: (query: IQuery) => Promise<IResponse | number | undefined>;
    deleteWidget: (query: IQuery) => Promise<IResponse | number | undefined>;
    deleteWidgets: (query: IQuery) => Promise<IResponse | number | undefined>;
    loadDashboards: (query?: IQuery) => Promise<IResponse | undefined>;
    getDashboard: (query: IQuery) => Promise<IResponse | undefined>;
    deleteDashboard: (query: IQuery) => Promise<IResponse | number | undefined>;
    deleteWDashboards: (query: IQuery) => Promise<IResponse | number | undefined>;
    getDashboards: () => Promise<IResponse | undefined>;
    setDashboard: (query: IQuery) => Promise<IResponse | undefined>;
    loadImages: (folder: string) => Promise<IResponse | undefined>;
    storeImage: (imageFile: FormData) => Promise<IResponse | number>;
    deleteImage: (folderName: string, imageName: string) => Promise<IResponse | number>;
    getImages: (query: IQuery) => Promise<IResponse | undefined>;
    setImage: (query: IQuery) => Promise<IResponse | undefined>;
    getHash: (resource: string, query: IQuery) => Promise<any>;
    setHash: (resource: string, query: IQuery) => Promise<number>;
    clearHash: () => Promise<number>;
}

export declare class BuzzcastingStorageReader {
    private sm;
    constructor(options: IStorageOptions);
    /**
     * Retieve Cloud Data
     * @param query Widgets parameters, type "cloud"
     * @returns IResponse
     */
    getCloud: (query: IQuery) => Promise<IResponse>;
    /**
     * Retieve Message Data
     * @param query Widgets parameters, type "messages"
     * @returns IResponse
     */
    getMessages: (query: IQuery) => Promise<IResponse>;
    /**
     * Retrieve Series Data
     * @param query Widgets parameters, type "series"
     * @returns IResponse
     */
    getSeries: (query: IQuery) => Promise<IResponse>;
}

declare interface IprocessResponse {
    code: number;
    hash: string;
}

/**
 * Main class for managing widgets and data updates
 */
export declare class Widget {
    private storageReader;
    private broadcastChannel;
    private element;
    private query;
    private callbacks;
    /**
     * Main container for managing widgets and data updates
     *
     * @param element widget web component
     * @param callbacks functions in the widget that will receive the update
     * @param selector container for the element - by default buzzcasting-app (optional)
     */
    constructor(element: HTMLElement, callbacks: Array<(arg: IResponse) => void>, selector?: string);
    addCallbackListener(cb: (arg: IResponse) => void): void;
    /**
     * Data received from BroadcastChannel
     * data that is broadcast needs to be a IMessage[] |ICloud or ISeries structure
     * WIDGET_UPDATE is used to trigger fetching on the broadcast channel,
     * but also to trigger data retrieval on the widget
     */
    broadcastListener(): void;
    /**
     * This is used to register the component on the container's broadcast channel
     * This takes place when the container indicates it has finished loading (ready)
     */
    subscribe(): void;
    /**
     * Generic call to any query type
     *
     * @returns IResponse
     */
    getData: () => Promise<IResponse>;
    /**
     * Get Widget Coud Data
     *
     * @returns IResponse
     */
    getCloud: () => Promise<IResponse>;
    /**
     * Get Widget Messages Data
     *
     * @returns IResponse
     */
    getMessages: () => Promise<IResponse>;
    /**
     * Get Widget Series Data
     *
     * @returns IResponse
     */
    getSeries: () => Promise<IResponse>;
    /**
     * Emit a show modal event using the element's attributes
     * the component is the web component name to show
     *
     * @param modal IModal
     */
    showModal: (modal: IModal) => void;
    destroy(): void;
}

export { }
