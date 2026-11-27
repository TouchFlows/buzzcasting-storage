import { IQuery, IResponse, IStorageOptions } from 'buzzcasting-utils';
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
//# sourceMappingURL=index.d.ts.map