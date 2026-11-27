import { IPreference, IQuery, IResponse, IStorageOptions } from 'buzzcasting-utils';
export default class ApiClient {
    private options;
    private url;
    constructor(options: IStorageOptions);
    private headers;
    private fileHeaders;
    private formHeaders;
    get(query: IQuery): Promise<IResponse>;
    ndjson(queries: IQuery[]): Promise<any>;
    hideMessage(query: IQuery): Promise<any>;
    hideLabels(query: IQuery): Promise<any>;
    loadSlide(query: IQuery): Promise<any>;
    /**
     * Create a brand-new slide (as opposed to storeSlide(), which PUTs an
     * update to an already-existing id). POSTs to the slides collection
     * rather than an :id resource, and - unlike storeSlide() - takes no id at
     * all: every real slide id observed (e.g. "01kfgn8bsyc74j4eyg6h3j8dj7") is
     * a ULID, almost certainly generated server-side on insert, so the
     * created record's real id comes back in the response instead. The
     * backoffice route this expects does not exist yet at time of writing
     * (see documentation/adding-slides.md in buzzcasting-app), so this call
     * is expected to fail (404/405) until that route is added.
     *
     * ex: window.__bc.storage.createSlide({data: {json: {...}, html:'', title:'New Slide', presentation_id:'01...'}})
     *
     * @param query
     * @returns the created slide, or a `{success: false}` envelope on failure
     */
    createSlide(query: IQuery): Promise<any>;
    /**
     * Store slide definition
     * ex: window.__bc.storage.storeSlide({id:'1',type:'slide', data: {json: {a:'b'},html:'<div/>',css:'abc'}, update: true}) // update: stockage sur le serveur
     *
     * @param query
     * @returns
     */
    storeSlide(query: IQuery): Promise<any>;
    loadPresentation(query: IQuery): Promise<any>;
    /**
     * Store slide definition
     * ex: window.__bc.storage.storeSlide({id:'1',type:'slide', data: {json: {a:'b'},html:'<div/>',css:'abc'}, update: true}) // update: stockage sur le serveur
     *
     * @param query
     * @returns
     */
    storePresentation(query: IQuery): Promise<any>;
    loadPreference(preference: IPreference): Promise<any>;
    storePreference(preference: IPreference): Promise<any>;
    loadDashboards(query?: IQuery): Promise<any>;
    loadImages(folderName: string): Promise<any>;
    storeImage(imageFile: FormData): Promise<any>;
    deleteImage(folderName: string, imageName: string): Promise<any>;
}
//# sourceMappingURL=api.d.ts.map