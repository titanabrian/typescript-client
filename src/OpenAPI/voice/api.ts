const BASE_PATH = "https://api-voice.chatdaddy.tech".replace(/\/+$/, "");

/* tslint:disable */
/* eslint-disable */
/**
 * ChatDaddy Voice Service
 * Place and receive voice calls from Chatdaddy via WebSockets 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
import type { RequestArgs } from '../base';
// @ts-ignore
import { COLLECTION_FORMATS, BaseAPI, RequiredError } from '../base';

/**
 * 
 * @export
 * @interface Calls
 */
export interface Calls {
    /**
     * AccountId of the user making the call
     * @type {string}
     * @memberof Calls
     */
    'accountId': string;
    /**
     * TeamId of the user making the call
     * @type {string}
     * @memberof Calls
     */
    'teamId'?: string;
    /**
     * phone number of the user
     * @type {string}
     * @memberof Calls
     */
    'phoneNumber': string;
    /**
     * phone number of the recipient
     * @type {string}
     * @memberof Calls
     */
    'to'?: string;
    /**
     * Id of the call
     * @type {string}
     * @memberof Calls
     */
    'callId': string;
    /**
     * URL of the recording
     * @type {string}
     * @memberof Calls
     */
    'callRecording'?: string | null;
}
/**
 * 
 * @export
 * @interface CallsGet200Response
 */
export interface CallsGet200Response {
    /**
     * 
     * @type {Array<Calls>}
     * @memberof CallsGet200Response
     */
    'calls'?: Array<Calls>;
}
/**
 * 
 * @export
 * @interface Contact
 */
interface Contact {
    /**
     * ID of the contact
     * @type {string}
     * @memberof Contact
     */
    'name': string;
    /**
     * Access token for the contact
     * @type {string}
     * @memberof Contact
     */
    'phoneNumber': string;
}
/**
 * 
 * @export
 * @interface Recording
 */
export interface Recording {
    /**
     * AccountId of the user making the call
     * @type {string}
     * @memberof Recording
     */
    'accountSid'?: string;
    /**
     * Id of the call
     * @type {string}
     * @memberof Recording
     */
    'callSid'?: string;
    /**
     * Id of the recording
     * @type {string}
     * @memberof Recording
     */
    'sid'?: string;
    /**
     * Date of the recording
     * @type {string}
     * @memberof Recording
     */
    'dateCreated'?: string;
    /**
     * Duration of the recording
     * @type {string}
     * @memberof Recording
     */
    'duration'?: string;
    /**
     * URL of the recording
     * @type {string}
     * @memberof Recording
     */
    'mediaUrl'?: string;
}
/**
 * 
 * @export
 * @interface RecordingsGet200Response
 */
export interface RecordingsGet200Response {
    /**
     * 
     * @type {Array<Recording>}
     * @memberof RecordingsGet200Response
     */
    'recordings'?: Array<Recording>;
}
/**
 * 
 * @export
 * @interface TokenGet200Response
 */
export interface TokenGet200Response {
    /**
     * 
     * @type {string}
     * @memberof TokenGet200Response
     */
    'token'?: string;
}
/**
 * 
 * @export
 * @interface VerifyNumberPost200Response
 */
export interface VerifyNumberPost200Response {
    /**
     * 
     * @type {string}
     * @memberof VerifyNumberPost200Response
     */
    'code'?: string;
    /**
     * 
     * @type {string}
     * @memberof VerifyNumberPost200Response
     */
    'phoneNumber'?: string;
    /**
     * 
     * @type {string}
     * @memberof VerifyNumberPost200Response
     */
    'name'?: string;
}
/**
 * 
 * @export
 * @interface VerifyNumberPostRequest
 */
export interface VerifyNumberPostRequest {
    /**
     * The phone number
     * @type {string}
     * @memberof VerifyNumberPostRequest
     */
    'phoneNumber': string;
}
/**
 * 
 * @export
 * @interface VoiceInboundPostRequest
 */
export interface VoiceInboundPostRequest {
    /**
     * Phone number of the caller
     * @type {string}
     * @memberof VoiceInboundPostRequest
     */
    'From': string;
    /**
     * Phone number of the recipient of the call
     * @type {string}
     * @memberof VoiceInboundPostRequest
     */
    'To': string;
    /**
     * Id of the call
     * @type {string}
     * @memberof VoiceInboundPostRequest
     */
    'CallSid'?: string;
}
/**
 * 
 * @export
 * @interface VoiceOutboundPostRequest
 */
export interface VoiceOutboundPostRequest {
    /**
     * Phone number of the caller
     * @type {string}
     * @memberof VoiceOutboundPostRequest
     */
    'From': string;
    /**
     * Phone number of the recipient of the call
     * @type {string}
     * @memberof VoiceOutboundPostRequest
     */
    'To': string;
    /**
     * Id of the call
     * @type {string}
     * @memberof VoiceOutboundPostRequest
     */
    'CallSid'?: string;
    /**
     * The account id of the user making the call
     * @type {string}
     * @memberof VoiceOutboundPostRequest
     */
    'accountId': string;
    /**
     * The team id of the user making the call
     * @type {string}
     * @memberof VoiceOutboundPostRequest
     */
    'teamId': string;
}

/**
 * CallsApi - axios parameter creator
 * @export
 */
export const CallsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get the calls for the account
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        callsGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/calls`;
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
         * @summary Get the call recordings for the account
         * @param {string} accountId The account id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        recordingsGet: async (accountId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('recordingsGet', 'accountId', accountId)
            const localVarPath = `/recordings/{accountId}`
                .replace(`{${"accountId"}}`, encodeURIComponent(String(accountId)));
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
         * @summary Get the twilio token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tokenGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/token`;
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
         * @summary Verify the number
         * @param {string} accountId The account id
         * @param {VerifyNumberPostRequest} [verifyNumberPostRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        verifyNumberPost: async (accountId: string, verifyNumberPostRequest?: VerifyNumberPostRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('verifyNumberPost', 'accountId', accountId)
            const localVarPath = `/verifyNumber/{accountId}`
                .replace(`{${"accountId"}}`, encodeURIComponent(String(accountId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(verifyNumberPostRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Inbound call route which receives webhook event and forwards to chatdaddy user
         * @param {VoiceInboundPostRequest} [voiceInboundPostRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        voiceInboundPost: async (voiceInboundPostRequest?: VoiceInboundPostRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/voice/inbound`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(voiceInboundPostRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Place the call and pass the audio stream
         * @param {VoiceOutboundPostRequest} [voiceOutboundPostRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        voiceOutboundPost: async (voiceOutboundPostRequest?: VoiceOutboundPostRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/voice/outbound`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(voiceOutboundPostRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CallsApi - functional programming interface
 * @export
 */
export const CallsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CallsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get the calls for the account
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async callsGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CallsGet200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.callsGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get the call recordings for the account
         * @param {string} accountId The account id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async recordingsGet(accountId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RecordingsGet200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.recordingsGet(accountId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get the twilio token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tokenGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TokenGet200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tokenGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Verify the number
         * @param {string} accountId The account id
         * @param {VerifyNumberPostRequest} [verifyNumberPostRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async verifyNumberPost(accountId: string, verifyNumberPostRequest?: VerifyNumberPostRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<VerifyNumberPost200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.verifyNumberPost(accountId, verifyNumberPostRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Inbound call route which receives webhook event and forwards to chatdaddy user
         * @param {VoiceInboundPostRequest} [voiceInboundPostRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async voiceInboundPost(voiceInboundPostRequest?: VoiceInboundPostRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.voiceInboundPost(voiceInboundPostRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Place the call and pass the audio stream
         * @param {VoiceOutboundPostRequest} [voiceOutboundPostRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async voiceOutboundPost(voiceOutboundPostRequest?: VoiceOutboundPostRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.voiceOutboundPost(voiceOutboundPostRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CallsApi - factory interface
 * @export
 */
export const CallsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CallsApiFp(configuration)
    return {
        /**
         * 
         * @summary Get the calls for the account
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        callsGet(options?: AxiosRequestConfig): AxiosPromise<CallsGet200Response> {
            return localVarFp.callsGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get the call recordings for the account
         * @param {CallsApiRecordingsGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        recordingsGet(requestParameters: CallsApiRecordingsGetRequest, options?: AxiosRequestConfig): AxiosPromise<RecordingsGet200Response> {
            return localVarFp.recordingsGet(requestParameters.accountId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get the twilio token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tokenGet(options?: AxiosRequestConfig): AxiosPromise<TokenGet200Response> {
            return localVarFp.tokenGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Verify the number
         * @param {CallsApiVerifyNumberPostRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        verifyNumberPost(requestParameters: CallsApiVerifyNumberPostRequest, options?: AxiosRequestConfig): AxiosPromise<VerifyNumberPost200Response> {
            return localVarFp.verifyNumberPost(requestParameters.accountId, requestParameters.verifyNumberPostRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Inbound call route which receives webhook event and forwards to chatdaddy user
         * @param {CallsApiVoiceInboundPostRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        voiceInboundPost(requestParameters: CallsApiVoiceInboundPostRequest = {}, options?: AxiosRequestConfig): AxiosPromise<string> {
            return localVarFp.voiceInboundPost(requestParameters.voiceInboundPostRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Place the call and pass the audio stream
         * @param {CallsApiVoiceOutboundPostRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        voiceOutboundPost(requestParameters: CallsApiVoiceOutboundPostRequest = {}, options?: AxiosRequestConfig): AxiosPromise<string> {
            return localVarFp.voiceOutboundPost(requestParameters.voiceOutboundPostRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for recordingsGet operation in CallsApi.
 * @export
 * @interface CallsApiRecordingsGetRequest
 */
export interface CallsApiRecordingsGetRequest {
    /**
     * The account id
     * @type {string}
     * @memberof CallsApiRecordingsGet
     */
    readonly accountId: string
}

/**
 * Request parameters for verifyNumberPost operation in CallsApi.
 * @export
 * @interface CallsApiVerifyNumberPostRequest
 */
export interface CallsApiVerifyNumberPostRequest {
    /**
     * The account id
     * @type {string}
     * @memberof CallsApiVerifyNumberPost
     */
    readonly accountId: string

    /**
     * 
     * @type {VerifyNumberPostRequest}
     * @memberof CallsApiVerifyNumberPost
     */
    readonly verifyNumberPostRequest?: VerifyNumberPostRequest
}

/**
 * Request parameters for voiceInboundPost operation in CallsApi.
 * @export
 * @interface CallsApiVoiceInboundPostRequest
 */
export interface CallsApiVoiceInboundPostRequest {
    /**
     * 
     * @type {VoiceInboundPostRequest}
     * @memberof CallsApiVoiceInboundPost
     */
    readonly voiceInboundPostRequest?: VoiceInboundPostRequest
}

/**
 * Request parameters for voiceOutboundPost operation in CallsApi.
 * @export
 * @interface CallsApiVoiceOutboundPostRequest
 */
export interface CallsApiVoiceOutboundPostRequest {
    /**
     * 
     * @type {VoiceOutboundPostRequest}
     * @memberof CallsApiVoiceOutboundPost
     */
    readonly voiceOutboundPostRequest?: VoiceOutboundPostRequest
}

/**
 * CallsApi - object-oriented interface
 * @export
 * @class CallsApi
 * @extends {BaseAPI}
 */
export class CallsApi extends BaseAPI {
    /**
     * 
     * @summary Get the calls for the account
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CallsApi
     */
    public callsGet(options?: AxiosRequestConfig) {
        return CallsApiFp(this.configuration).callsGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get the call recordings for the account
     * @param {CallsApiRecordingsGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CallsApi
     */
    public recordingsGet(requestParameters: CallsApiRecordingsGetRequest, options?: AxiosRequestConfig) {
        return CallsApiFp(this.configuration).recordingsGet(requestParameters.accountId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get the twilio token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CallsApi
     */
    public tokenGet(options?: AxiosRequestConfig) {
        return CallsApiFp(this.configuration).tokenGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Verify the number
     * @param {CallsApiVerifyNumberPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CallsApi
     */
    public verifyNumberPost(requestParameters: CallsApiVerifyNumberPostRequest, options?: AxiosRequestConfig) {
        return CallsApiFp(this.configuration).verifyNumberPost(requestParameters.accountId, requestParameters.verifyNumberPostRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Inbound call route which receives webhook event and forwards to chatdaddy user
     * @param {CallsApiVoiceInboundPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CallsApi
     */
    public voiceInboundPost(requestParameters: CallsApiVoiceInboundPostRequest = {}, options?: AxiosRequestConfig) {
        return CallsApiFp(this.configuration).voiceInboundPost(requestParameters.voiceInboundPostRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Place the call and pass the audio stream
     * @param {CallsApiVoiceOutboundPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CallsApi
     */
    public voiceOutboundPost(requestParameters: CallsApiVoiceOutboundPostRequest = {}, options?: AxiosRequestConfig) {
        return CallsApiFp(this.configuration).voiceOutboundPost(requestParameters.voiceOutboundPostRequest, options).then((request) => request(this.axios, this.basePath));
    }
}


