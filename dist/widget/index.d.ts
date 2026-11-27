import { IModal, IResponse } from 'buzzcasting-utils';
/**
 * Main class for managing widgets and data updates
 */
export default class Widget {
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
     * Tell the container to drop this widget from its subscriber list - the
     * counterpart to subscribe(), called from destroy() when the widget's own
     * component unmounts (e.g. the builder switches to a different slide).
     * Without this, the container's subscriber list only ever grows: every
     * widget ever mounted in the session stays in it, and every periodic
     * refresh re-fetches all of them, not just the ones actually on screen.
     */
    unsubscribe(): void;
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
//# sourceMappingURL=index.d.ts.map