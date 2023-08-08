const BASE_PATH = "https://api-nfc.wscrm.me".replace(/\/+$/, "");

/* tslint:disable */
/* eslint-disable */
/**
 * NFC Service
 * NFC Service API for ChatDaddy Admin  
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from '../configuration';
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';

/**
 * 
 * @export
 * @interface CreateQrCodes200Response
 */
export interface CreateQrCodes200Response {
    /**
     * 
     * @type {Array<QRCode>}
     * @memberof CreateQrCodes200Response
     */
    'qrCodes'?: Array<QRCode>;
}
/**
 * 
 * @export
 * @interface CreateQrCodesRequest
 */
export interface CreateQrCodesRequest {
    /**
     * 
     * @type {Array<QRCodeCreate>}
     * @memberof CreateQrCodesRequest
     */
    'qrCodes': Array<QRCodeCreate>;
}
/**
 * 
 * @export
 * @interface GetQrCodes200Response
 */
export interface GetQrCodes200Response {
    /**
     * 
     * @type {Array<QRCode>}
     * @memberof GetQrCodes200Response
     */
    'qrCodes'?: Array<QRCode>;
    /**
     * The total amount of QrCodes
     * @type {number}
     * @memberof GetQrCodes200Response
     */
    'total'?: number;
}
/**
 * 
 * @export
 * @interface QRCode
 */
export interface QRCode {
    /**
     * The ID of the QR Code
     * @type {string}
     * @memberof QRCode
     */
    'id': string;
    /**
     * The URL of the QR Code
     * @type {string}
     * @memberof QRCode
     */
    'qrUrl': string;
    /**
     * The URL of the QR Code
     * @type {string}
     * @memberof QRCode
     */
    'redirectUrl'?: string;
    /**
     * The category of the QR Code
     * @type {string}
     * @memberof QRCode
     */
    'category'?: string;
    /**
     * The amount of times the QR Code has been scanned
     * @type {number}
     * @memberof QRCode
     */
    'scannedAmount'?: number;
    /**
     * The date and time the QR Code was created
     * @type {string}
     * @memberof QRCode
     */
    'createdAt'?: string;
    /**
     * The date and time the QR Code was last updated
     * @type {string}
     * @memberof QRCode
     */
    'updatedAt'?: string;
}
/**
 * 
 * @export
 * @interface QRCodeCreate
 */
export interface QRCodeCreate {
    /**
     * The ID of the QR Code
     * @type {string}
     * @memberof QRCodeCreate
     */
    'id': string;
    /**
     * The URL of the QR Code
     * @type {string}
     * @memberof QRCodeCreate
     */
    'qrUrl': string;
    /**
     * The URL of the QR Code
     * @type {string}
     * @memberof QRCodeCreate
     */
    'redirectUrl'?: string;
    /**
     * The category of the QR Code
     * @type {string}
     * @memberof QRCodeCreate
     */
    'category'?: string;
}
/**
 * 
 * @export
 * @interface QRCodeUpdate
 */
export interface QRCodeUpdate {
    /**
     * The ID of the QR Code
     * @type {string}
     * @memberof QRCodeUpdate
     */
    'id': string;
    /**
     * The URL of the QR Code
     * @type {string}
     * @memberof QRCodeUpdate
     */
    'qrUrl'?: string;
    /**
     * The URL of the QR Code
     * @type {string}
     * @memberof QRCodeUpdate
     */
    'redirectUrl'?: string;
    /**
     * The category of the QR Code
     * @type {string}
     * @memberof QRCodeUpdate
     */
    'category'?: string;
    /**
     * The amount of times the QR Code has been scanned
     * @type {number}
     * @memberof QRCodeUpdate
     */
    'scannedAmount'?: number;
}
/**
 * 
 * @export
 * @interface UpdateQrCodesRequest
 */
export interface UpdateQrCodesRequest {
    /**
     * 
     * @type {Array<QRCodeUpdate>}
     * @memberof UpdateQrCodesRequest
     */
    'qrCodes': Array<QRCodeUpdate>;
}

/**
 * QrCodeApi - axios parameter creator
 * @export
 */
export const QrCodeApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates QrCodes
         * @param {CreateQrCodesRequest} createQrCodesRequest QrCodes to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createQrCodes: async (createQrCodesRequest: CreateQrCodesRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createQrCodesRequest' is not null or undefined
            assertParamExists('createQrCodes', 'createQrCodesRequest', createQrCodesRequest)
            const localVarPath = `/qr-code`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication chatdaddy required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "chatdaddy", [], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createQrCodesRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Deletes QrCodes
         * @param {Array<string>} ids The IDs of the QrCodes to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteQrCodes: async (ids: Array<string>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'ids' is not null or undefined
            assertParamExists('deleteQrCodes', 'ids', ids)
            const localVarPath = `/qr-code`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication chatdaddy required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "chatdaddy", [], configuration)

            if (ids) {
                localVarQueryParameter['ids'] = ids;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get a QrCode
         * @param {string} id The ID of the QrCode to retrieve
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getQrCode: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getQrCode', 'id', id)
            const localVarPath = `/qr-code/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication chatdaddy required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "chatdaddy", [], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get all QrCodes
         * @param {string} [q] 
         * @param {number} [count] 
         * @param {number} [page] The page number
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getQrCodes: async (q?: string, count?: number, page?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/qr-code`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication chatdaddy required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "chatdaddy", [], configuration)

            if (q !== undefined) {
                localVarQueryParameter['q'] = q;
            }

            if (count !== undefined) {
                localVarQueryParameter['count'] = count;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get QrCodes by phone
         * @param {string} phone The phone of QrCodes to retrieve
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getQrCodesByPhone: async (phone: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'phone' is not null or undefined
            assertParamExists('getQrCodesByPhone', 'phone', phone)
            const localVarPath = `/qr-codes/{phone}`
                .replace(`{${"phone"}}`, encodeURIComponent(String(phone)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication chatdaddy required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "chatdaddy", [], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Redirect based on QrCode state
         * @param {string} id The ID of the QrCode to retrieve
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        redirectQrCode: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('redirectQrCode', 'id', id)
            const localVarPath = `/redirect/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update a QrCode
         * @param {string} id The ID of the QrCode to retrieve
         * @param {QRCodeUpdate} qRCodeUpdate QrCode to update
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateQrCode: async (id: string, qRCodeUpdate: QRCodeUpdate, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateQrCode', 'id', id)
            // verify required parameter 'qRCodeUpdate' is not null or undefined
            assertParamExists('updateQrCode', 'qRCodeUpdate', qRCodeUpdate)
            const localVarPath = `/qr-code/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication chatdaddy required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "chatdaddy", [], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(qRCodeUpdate, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Updates QrCodes
         * @param {UpdateQrCodesRequest} updateQrCodesRequest QrCodes to update
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateQrCodes: async (updateQrCodesRequest: UpdateQrCodesRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'updateQrCodesRequest' is not null or undefined
            assertParamExists('updateQrCodes', 'updateQrCodesRequest', updateQrCodesRequest)
            const localVarPath = `/qr-code`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication chatdaddy required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "chatdaddy", [], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateQrCodesRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * QrCodeApi - functional programming interface
 * @export
 */
export const QrCodeApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = QrCodeApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Creates QrCodes
         * @param {CreateQrCodesRequest} createQrCodesRequest QrCodes to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createQrCodes(createQrCodesRequest: CreateQrCodesRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateQrCodes200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createQrCodes(createQrCodesRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Deletes QrCodes
         * @param {Array<string>} ids The IDs of the QrCodes to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteQrCodes(ids: Array<string>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteQrCodes(ids, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get a QrCode
         * @param {string} id The ID of the QrCode to retrieve
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getQrCode(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<QRCode>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getQrCode(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get all QrCodes
         * @param {string} [q] 
         * @param {number} [count] 
         * @param {number} [page] The page number
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getQrCodes(q?: string, count?: number, page?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetQrCodes200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getQrCodes(q, count, page, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get QrCodes by phone
         * @param {string} phone The phone of QrCodes to retrieve
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getQrCodesByPhone(phone: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateQrCodes200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getQrCodesByPhone(phone, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Redirect based on QrCode state
         * @param {string} id The ID of the QrCode to retrieve
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async redirectQrCode(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.redirectQrCode(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update a QrCode
         * @param {string} id The ID of the QrCode to retrieve
         * @param {QRCodeUpdate} qRCodeUpdate QrCode to update
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateQrCode(id: string, qRCodeUpdate: QRCodeUpdate, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<QRCode>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateQrCode(id, qRCodeUpdate, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Updates QrCodes
         * @param {UpdateQrCodesRequest} updateQrCodesRequest QrCodes to update
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateQrCodes(updateQrCodesRequest: UpdateQrCodesRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateQrCodes200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateQrCodes(updateQrCodesRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * QrCodeApi - factory interface
 * @export
 */
export const QrCodeApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = QrCodeApiFp(configuration)
    return {
        /**
         * 
         * @summary Creates QrCodes
         * @param {CreateQrCodesRequest} createQrCodesRequest QrCodes to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createQrCodes(createQrCodesRequest: CreateQrCodesRequest, options?: any): AxiosPromise<CreateQrCodes200Response> {
            return localVarFp.createQrCodes(createQrCodesRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Deletes QrCodes
         * @param {Array<string>} ids The IDs of the QrCodes to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteQrCodes(ids: Array<string>, options?: any): AxiosPromise<void> {
            return localVarFp.deleteQrCodes(ids, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get a QrCode
         * @param {string} id The ID of the QrCode to retrieve
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getQrCode(id: string, options?: any): AxiosPromise<QRCode> {
            return localVarFp.getQrCode(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get all QrCodes
         * @param {string} [q] 
         * @param {number} [count] 
         * @param {number} [page] The page number
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getQrCodes(q?: string, count?: number, page?: number, options?: any): AxiosPromise<GetQrCodes200Response> {
            return localVarFp.getQrCodes(q, count, page, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get QrCodes by phone
         * @param {string} phone The phone of QrCodes to retrieve
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getQrCodesByPhone(phone: string, options?: any): AxiosPromise<CreateQrCodes200Response> {
            return localVarFp.getQrCodesByPhone(phone, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Redirect based on QrCode state
         * @param {string} id The ID of the QrCode to retrieve
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        redirectQrCode(id: string, options?: any): AxiosPromise<void> {
            return localVarFp.redirectQrCode(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update a QrCode
         * @param {string} id The ID of the QrCode to retrieve
         * @param {QRCodeUpdate} qRCodeUpdate QrCode to update
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateQrCode(id: string, qRCodeUpdate: QRCodeUpdate, options?: any): AxiosPromise<QRCode> {
            return localVarFp.updateQrCode(id, qRCodeUpdate, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates QrCodes
         * @param {UpdateQrCodesRequest} updateQrCodesRequest QrCodes to update
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateQrCodes(updateQrCodesRequest: UpdateQrCodesRequest, options?: any): AxiosPromise<CreateQrCodes200Response> {
            return localVarFp.updateQrCodes(updateQrCodesRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createQrCodes operation in QrCodeApi.
 * @export
 * @interface QrCodeApiCreateQrCodesRequest
 */
export interface QrCodeApiCreateQrCodesRequest {
    /**
     * QrCodes to create
     * @type {CreateQrCodesRequest}
     * @memberof QrCodeApiCreateQrCodes
     */
    readonly createQrCodesRequest: CreateQrCodesRequest
}

/**
 * Request parameters for deleteQrCodes operation in QrCodeApi.
 * @export
 * @interface QrCodeApiDeleteQrCodesRequest
 */
export interface QrCodeApiDeleteQrCodesRequest {
    /**
     * The IDs of the QrCodes to delete
     * @type {Array<string>}
     * @memberof QrCodeApiDeleteQrCodes
     */
    readonly ids: Array<string>
}

/**
 * Request parameters for getQrCode operation in QrCodeApi.
 * @export
 * @interface QrCodeApiGetQrCodeRequest
 */
export interface QrCodeApiGetQrCodeRequest {
    /**
     * The ID of the QrCode to retrieve
     * @type {string}
     * @memberof QrCodeApiGetQrCode
     */
    readonly id: string
}

/**
 * Request parameters for getQrCodes operation in QrCodeApi.
 * @export
 * @interface QrCodeApiGetQrCodesRequest
 */
export interface QrCodeApiGetQrCodesRequest {
    /**
     * 
     * @type {string}
     * @memberof QrCodeApiGetQrCodes
     */
    readonly q?: string

    /**
     * 
     * @type {number}
     * @memberof QrCodeApiGetQrCodes
     */
    readonly count?: number

    /**
     * The page number
     * @type {number}
     * @memberof QrCodeApiGetQrCodes
     */
    readonly page?: number
}

/**
 * Request parameters for getQrCodesByPhone operation in QrCodeApi.
 * @export
 * @interface QrCodeApiGetQrCodesByPhoneRequest
 */
export interface QrCodeApiGetQrCodesByPhoneRequest {
    /**
     * The phone of QrCodes to retrieve
     * @type {string}
     * @memberof QrCodeApiGetQrCodesByPhone
     */
    readonly phone: string
}

/**
 * Request parameters for redirectQrCode operation in QrCodeApi.
 * @export
 * @interface QrCodeApiRedirectQrCodeRequest
 */
export interface QrCodeApiRedirectQrCodeRequest {
    /**
     * The ID of the QrCode to retrieve
     * @type {string}
     * @memberof QrCodeApiRedirectQrCode
     */
    readonly id: string
}

/**
 * Request parameters for updateQrCode operation in QrCodeApi.
 * @export
 * @interface QrCodeApiUpdateQrCodeRequest
 */
export interface QrCodeApiUpdateQrCodeRequest {
    /**
     * The ID of the QrCode to retrieve
     * @type {string}
     * @memberof QrCodeApiUpdateQrCode
     */
    readonly id: string

    /**
     * QrCode to update
     * @type {QRCodeUpdate}
     * @memberof QrCodeApiUpdateQrCode
     */
    readonly qRCodeUpdate: QRCodeUpdate
}

/**
 * Request parameters for updateQrCodes operation in QrCodeApi.
 * @export
 * @interface QrCodeApiUpdateQrCodesRequest
 */
export interface QrCodeApiUpdateQrCodesRequest {
    /**
     * QrCodes to update
     * @type {UpdateQrCodesRequest}
     * @memberof QrCodeApiUpdateQrCodes
     */
    readonly updateQrCodesRequest: UpdateQrCodesRequest
}

/**
 * QrCodeApi - object-oriented interface
 * @export
 * @class QrCodeApi
 * @extends {BaseAPI}
 */
export class QrCodeApi extends BaseAPI {
    /**
     * 
     * @summary Creates QrCodes
     * @param {QrCodeApiCreateQrCodesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QrCodeApi
     */
    public createQrCodes(requestParameters: QrCodeApiCreateQrCodesRequest, options?: AxiosRequestConfig) {
        return QrCodeApiFp(this.configuration).createQrCodes(requestParameters.createQrCodesRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Deletes QrCodes
     * @param {QrCodeApiDeleteQrCodesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QrCodeApi
     */
    public deleteQrCodes(requestParameters: QrCodeApiDeleteQrCodesRequest, options?: AxiosRequestConfig) {
        return QrCodeApiFp(this.configuration).deleteQrCodes(requestParameters.ids, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get a QrCode
     * @param {QrCodeApiGetQrCodeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QrCodeApi
     */
    public getQrCode(requestParameters: QrCodeApiGetQrCodeRequest, options?: AxiosRequestConfig) {
        return QrCodeApiFp(this.configuration).getQrCode(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get all QrCodes
     * @param {QrCodeApiGetQrCodesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QrCodeApi
     */
    public getQrCodes(requestParameters: QrCodeApiGetQrCodesRequest = {}, options?: AxiosRequestConfig) {
        return QrCodeApiFp(this.configuration).getQrCodes(requestParameters.q, requestParameters.count, requestParameters.page, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get QrCodes by phone
     * @param {QrCodeApiGetQrCodesByPhoneRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QrCodeApi
     */
    public getQrCodesByPhone(requestParameters: QrCodeApiGetQrCodesByPhoneRequest, options?: AxiosRequestConfig) {
        return QrCodeApiFp(this.configuration).getQrCodesByPhone(requestParameters.phone, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Redirect based on QrCode state
     * @param {QrCodeApiRedirectQrCodeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QrCodeApi
     */
    public redirectQrCode(requestParameters: QrCodeApiRedirectQrCodeRequest, options?: AxiosRequestConfig) {
        return QrCodeApiFp(this.configuration).redirectQrCode(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update a QrCode
     * @param {QrCodeApiUpdateQrCodeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QrCodeApi
     */
    public updateQrCode(requestParameters: QrCodeApiUpdateQrCodeRequest, options?: AxiosRequestConfig) {
        return QrCodeApiFp(this.configuration).updateQrCode(requestParameters.id, requestParameters.qRCodeUpdate, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates QrCodes
     * @param {QrCodeApiUpdateQrCodesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QrCodeApi
     */
    public updateQrCodes(requestParameters: QrCodeApiUpdateQrCodesRequest, options?: AxiosRequestConfig) {
        return QrCodeApiFp(this.configuration).updateQrCodes(requestParameters.updateQrCodesRequest, options).then((request) => request(this.axios, this.basePath));
    }
}


