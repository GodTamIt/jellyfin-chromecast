/* tslint:disable */
/* eslint-disable */
/**
 * Jellyfin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { BaseItemDtoQueryResult } from '../models';
// @ts-ignore
import { CreatePlaylistDto } from '../models';
// @ts-ignore
import { ImageType } from '../models';
// @ts-ignore
import { PlaylistCreationResult } from '../models';
/**
 * PlaylistsApi - axios parameter creator
 * @export
 */
export const PlaylistsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Adds items to a playlist.
         * @param {string} playlistId The playlist id.
         * @param {string} [ids] Item id, comma delimited.
         * @param {string} [userId] The userId.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addToPlaylist: async (playlistId: string, ids?: string, userId?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'playlistId' is not null or undefined
            if (playlistId === null || playlistId === undefined) {
                throw new RequiredError('playlistId','Required parameter playlistId was null or undefined when calling addToPlaylist.');
            }
            const localVarPath = `/Playlists/{playlistId}/Items`
                .replace(`{${"playlistId"}}`, encodeURIComponent(String(playlistId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Emby-Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Emby-Authorization"] = localVarApiKeyValue;
            }

            if (ids !== undefined) {
                localVarQueryParameter['ids'] = ids;
            }

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }


    
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Creates a new playlist.
         * @param {CreatePlaylistDto} createPlaylistDto The create playlist payload.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createPlaylist: async (createPlaylistDto: CreatePlaylistDto, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'createPlaylistDto' is not null or undefined
            if (createPlaylistDto === null || createPlaylistDto === undefined) {
                throw new RequiredError('createPlaylistDto','Required parameter createPlaylistDto was null or undefined when calling createPlaylist.');
            }
            const localVarPath = `/Playlists`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Emby-Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Emby-Authorization"] = localVarApiKeyValue;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof createPlaylistDto !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(createPlaylistDto !== undefined ? createPlaylistDto : {}) : (createPlaylistDto || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets the original items of a playlist.
         * @param {string} playlistId The playlist id.
         * @param {string} userId User id.
         * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
         * @param {number} [limit] Optional. The maximum number of records to return.
         * @param {string} [fields] Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines.
         * @param {boolean} [enableImages] Optional. Include image information in output.
         * @param {boolean} [enableUserData] Optional. Include user data.
         * @param {number} [imageTypeLimit] Optional. The max number of images to return, per image type.
         * @param {Array<ImageType>} [enableImageTypes] Optional. The image types to include in the output.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPlaylistItems: async (playlistId: string, userId: string, startIndex?: number, limit?: number, fields?: string, enableImages?: boolean, enableUserData?: boolean, imageTypeLimit?: number, enableImageTypes?: Array<ImageType>, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'playlistId' is not null or undefined
            if (playlistId === null || playlistId === undefined) {
                throw new RequiredError('playlistId','Required parameter playlistId was null or undefined when calling getPlaylistItems.');
            }
            // verify required parameter 'userId' is not null or undefined
            if (userId === null || userId === undefined) {
                throw new RequiredError('userId','Required parameter userId was null or undefined when calling getPlaylistItems.');
            }
            const localVarPath = `/Playlists/{playlistId}/Items`
                .replace(`{${"playlistId"}}`, encodeURIComponent(String(playlistId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Emby-Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Emby-Authorization"] = localVarApiKeyValue;
            }

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }

            if (startIndex !== undefined) {
                localVarQueryParameter['startIndex'] = startIndex;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }

            if (enableImages !== undefined) {
                localVarQueryParameter['enableImages'] = enableImages;
            }

            if (enableUserData !== undefined) {
                localVarQueryParameter['enableUserData'] = enableUserData;
            }

            if (imageTypeLimit !== undefined) {
                localVarQueryParameter['imageTypeLimit'] = imageTypeLimit;
            }

            if (enableImageTypes) {
                localVarQueryParameter['enableImageTypes'] = enableImageTypes;
            }


    
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Moves a playlist item.
         * @param {string} playlistId The playlist id.
         * @param {string} itemId The item id.
         * @param {number} newIndex The new index.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        moveItem: async (playlistId: string, itemId: string, newIndex: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'playlistId' is not null or undefined
            if (playlistId === null || playlistId === undefined) {
                throw new RequiredError('playlistId','Required parameter playlistId was null or undefined when calling moveItem.');
            }
            // verify required parameter 'itemId' is not null or undefined
            if (itemId === null || itemId === undefined) {
                throw new RequiredError('itemId','Required parameter itemId was null or undefined when calling moveItem.');
            }
            // verify required parameter 'newIndex' is not null or undefined
            if (newIndex === null || newIndex === undefined) {
                throw new RequiredError('newIndex','Required parameter newIndex was null or undefined when calling moveItem.');
            }
            const localVarPath = `/Playlists/{playlistId}/Items/{itemId}/Move/{newIndex}`
                .replace(`{${"playlistId"}}`, encodeURIComponent(String(playlistId)))
                .replace(`{${"itemId"}}`, encodeURIComponent(String(itemId)))
                .replace(`{${"newIndex"}}`, encodeURIComponent(String(newIndex)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Emby-Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Emby-Authorization"] = localVarApiKeyValue;
            }


    
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Removes items from a playlist.
         * @param {string} playlistId The playlist id.
         * @param {string} [entryIds] The item ids, comma delimited.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeFromPlaylist: async (playlistId: string, entryIds?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'playlistId' is not null or undefined
            if (playlistId === null || playlistId === undefined) {
                throw new RequiredError('playlistId','Required parameter playlistId was null or undefined when calling removeFromPlaylist.');
            }
            const localVarPath = `/Playlists/{playlistId}/Items`
                .replace(`{${"playlistId"}}`, encodeURIComponent(String(playlistId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Emby-Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Emby-Authorization"] = localVarApiKeyValue;
            }

            if (entryIds !== undefined) {
                localVarQueryParameter['entryIds'] = entryIds;
            }


    
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PlaylistsApi - functional programming interface
 * @export
 */
export const PlaylistsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Adds items to a playlist.
         * @param {string} playlistId The playlist id.
         * @param {string} [ids] Item id, comma delimited.
         * @param {string} [userId] The userId.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addToPlaylist(playlistId: string, ids?: string, userId?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await PlaylistsApiAxiosParamCreator(configuration).addToPlaylist(playlistId, ids, userId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Creates a new playlist.
         * @param {CreatePlaylistDto} createPlaylistDto The create playlist payload.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createPlaylist(createPlaylistDto: CreatePlaylistDto, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PlaylistCreationResult>> {
            const localVarAxiosArgs = await PlaylistsApiAxiosParamCreator(configuration).createPlaylist(createPlaylistDto, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets the original items of a playlist.
         * @param {string} playlistId The playlist id.
         * @param {string} userId User id.
         * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
         * @param {number} [limit] Optional. The maximum number of records to return.
         * @param {string} [fields] Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines.
         * @param {boolean} [enableImages] Optional. Include image information in output.
         * @param {boolean} [enableUserData] Optional. Include user data.
         * @param {number} [imageTypeLimit] Optional. The max number of images to return, per image type.
         * @param {Array<ImageType>} [enableImageTypes] Optional. The image types to include in the output.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPlaylistItems(playlistId: string, userId: string, startIndex?: number, limit?: number, fields?: string, enableImages?: boolean, enableUserData?: boolean, imageTypeLimit?: number, enableImageTypes?: Array<ImageType>, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BaseItemDtoQueryResult>> {
            const localVarAxiosArgs = await PlaylistsApiAxiosParamCreator(configuration).getPlaylistItems(playlistId, userId, startIndex, limit, fields, enableImages, enableUserData, imageTypeLimit, enableImageTypes, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Moves a playlist item.
         * @param {string} playlistId The playlist id.
         * @param {string} itemId The item id.
         * @param {number} newIndex The new index.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async moveItem(playlistId: string, itemId: string, newIndex: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await PlaylistsApiAxiosParamCreator(configuration).moveItem(playlistId, itemId, newIndex, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Removes items from a playlist.
         * @param {string} playlistId The playlist id.
         * @param {string} [entryIds] The item ids, comma delimited.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeFromPlaylist(playlistId: string, entryIds?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await PlaylistsApiAxiosParamCreator(configuration).removeFromPlaylist(playlistId, entryIds, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * PlaylistsApi - factory interface
 * @export
 */
export const PlaylistsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Adds items to a playlist.
         * @param {string} playlistId The playlist id.
         * @param {string} [ids] Item id, comma delimited.
         * @param {string} [userId] The userId.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addToPlaylist(playlistId: string, ids?: string, userId?: string, options?: any): AxiosPromise<void> {
            return PlaylistsApiFp(configuration).addToPlaylist(playlistId, ids, userId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Creates a new playlist.
         * @param {CreatePlaylistDto} createPlaylistDto The create playlist payload.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createPlaylist(createPlaylistDto: CreatePlaylistDto, options?: any): AxiosPromise<PlaylistCreationResult> {
            return PlaylistsApiFp(configuration).createPlaylist(createPlaylistDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets the original items of a playlist.
         * @param {string} playlistId The playlist id.
         * @param {string} userId User id.
         * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
         * @param {number} [limit] Optional. The maximum number of records to return.
         * @param {string} [fields] Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines.
         * @param {boolean} [enableImages] Optional. Include image information in output.
         * @param {boolean} [enableUserData] Optional. Include user data.
         * @param {number} [imageTypeLimit] Optional. The max number of images to return, per image type.
         * @param {Array<ImageType>} [enableImageTypes] Optional. The image types to include in the output.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPlaylistItems(playlistId: string, userId: string, startIndex?: number, limit?: number, fields?: string, enableImages?: boolean, enableUserData?: boolean, imageTypeLimit?: number, enableImageTypes?: Array<ImageType>, options?: any): AxiosPromise<BaseItemDtoQueryResult> {
            return PlaylistsApiFp(configuration).getPlaylistItems(playlistId, userId, startIndex, limit, fields, enableImages, enableUserData, imageTypeLimit, enableImageTypes, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Moves a playlist item.
         * @param {string} playlistId The playlist id.
         * @param {string} itemId The item id.
         * @param {number} newIndex The new index.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        moveItem(playlistId: string, itemId: string, newIndex: number, options?: any): AxiosPromise<void> {
            return PlaylistsApiFp(configuration).moveItem(playlistId, itemId, newIndex, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Removes items from a playlist.
         * @param {string} playlistId The playlist id.
         * @param {string} [entryIds] The item ids, comma delimited.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeFromPlaylist(playlistId: string, entryIds?: string, options?: any): AxiosPromise<void> {
            return PlaylistsApiFp(configuration).removeFromPlaylist(playlistId, entryIds, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for addToPlaylist operation in PlaylistsApi.
 * @export
 * @interface PlaylistsApiAddToPlaylistRequest
 */
export interface PlaylistsApiAddToPlaylistRequest {
    /**
     * The playlist id.
     * @type {string}
     * @memberof PlaylistsApiAddToPlaylist
     */
    readonly playlistId: string

    /**
     * Item id, comma delimited.
     * @type {string}
     * @memberof PlaylistsApiAddToPlaylist
     */
    readonly ids?: string

    /**
     * The userId.
     * @type {string}
     * @memberof PlaylistsApiAddToPlaylist
     */
    readonly userId?: string
}

/**
 * Request parameters for createPlaylist operation in PlaylistsApi.
 * @export
 * @interface PlaylistsApiCreatePlaylistRequest
 */
export interface PlaylistsApiCreatePlaylistRequest {
    /**
     * The create playlist payload.
     * @type {CreatePlaylistDto}
     * @memberof PlaylistsApiCreatePlaylist
     */
    readonly createPlaylistDto: CreatePlaylistDto
}

/**
 * Request parameters for getPlaylistItems operation in PlaylistsApi.
 * @export
 * @interface PlaylistsApiGetPlaylistItemsRequest
 */
export interface PlaylistsApiGetPlaylistItemsRequest {
    /**
     * The playlist id.
     * @type {string}
     * @memberof PlaylistsApiGetPlaylistItems
     */
    readonly playlistId: string

    /**
     * User id.
     * @type {string}
     * @memberof PlaylistsApiGetPlaylistItems
     */
    readonly userId: string

    /**
     * Optional. The record index to start at. All items with a lower index will be dropped from the results.
     * @type {number}
     * @memberof PlaylistsApiGetPlaylistItems
     */
    readonly startIndex?: number

    /**
     * Optional. The maximum number of records to return.
     * @type {number}
     * @memberof PlaylistsApiGetPlaylistItems
     */
    readonly limit?: number

    /**
     * Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines.
     * @type {string}
     * @memberof PlaylistsApiGetPlaylistItems
     */
    readonly fields?: string

    /**
     * Optional. Include image information in output.
     * @type {boolean}
     * @memberof PlaylistsApiGetPlaylistItems
     */
    readonly enableImages?: boolean

    /**
     * Optional. Include user data.
     * @type {boolean}
     * @memberof PlaylistsApiGetPlaylistItems
     */
    readonly enableUserData?: boolean

    /**
     * Optional. The max number of images to return, per image type.
     * @type {number}
     * @memberof PlaylistsApiGetPlaylistItems
     */
    readonly imageTypeLimit?: number

    /**
     * Optional. The image types to include in the output.
     * @type {Array<ImageType>}
     * @memberof PlaylistsApiGetPlaylistItems
     */
    readonly enableImageTypes?: Array<ImageType>
}

/**
 * Request parameters for moveItem operation in PlaylistsApi.
 * @export
 * @interface PlaylistsApiMoveItemRequest
 */
export interface PlaylistsApiMoveItemRequest {
    /**
     * The playlist id.
     * @type {string}
     * @memberof PlaylistsApiMoveItem
     */
    readonly playlistId: string

    /**
     * The item id.
     * @type {string}
     * @memberof PlaylistsApiMoveItem
     */
    readonly itemId: string

    /**
     * The new index.
     * @type {number}
     * @memberof PlaylistsApiMoveItem
     */
    readonly newIndex: number
}

/**
 * Request parameters for removeFromPlaylist operation in PlaylistsApi.
 * @export
 * @interface PlaylistsApiRemoveFromPlaylistRequest
 */
export interface PlaylistsApiRemoveFromPlaylistRequest {
    /**
     * The playlist id.
     * @type {string}
     * @memberof PlaylistsApiRemoveFromPlaylist
     */
    readonly playlistId: string

    /**
     * The item ids, comma delimited.
     * @type {string}
     * @memberof PlaylistsApiRemoveFromPlaylist
     */
    readonly entryIds?: string
}

/**
 * PlaylistsApi - object-oriented interface
 * @export
 * @class PlaylistsApi
 * @extends {BaseAPI}
 */
export class PlaylistsApi extends BaseAPI {
    /**
     * 
     * @summary Adds items to a playlist.
     * @param {PlaylistsApiAddToPlaylistRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlaylistsApi
     */
    public addToPlaylist(requestParameters: PlaylistsApiAddToPlaylistRequest, options?: any) {
        return PlaylistsApiFp(this.configuration).addToPlaylist(requestParameters.playlistId, requestParameters.ids, requestParameters.userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Creates a new playlist.
     * @param {PlaylistsApiCreatePlaylistRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlaylistsApi
     */
    public createPlaylist(requestParameters: PlaylistsApiCreatePlaylistRequest, options?: any) {
        return PlaylistsApiFp(this.configuration).createPlaylist(requestParameters.createPlaylistDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets the original items of a playlist.
     * @param {PlaylistsApiGetPlaylistItemsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlaylistsApi
     */
    public getPlaylistItems(requestParameters: PlaylistsApiGetPlaylistItemsRequest, options?: any) {
        return PlaylistsApiFp(this.configuration).getPlaylistItems(requestParameters.playlistId, requestParameters.userId, requestParameters.startIndex, requestParameters.limit, requestParameters.fields, requestParameters.enableImages, requestParameters.enableUserData, requestParameters.imageTypeLimit, requestParameters.enableImageTypes, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Moves a playlist item.
     * @param {PlaylistsApiMoveItemRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlaylistsApi
     */
    public moveItem(requestParameters: PlaylistsApiMoveItemRequest, options?: any) {
        return PlaylistsApiFp(this.configuration).moveItem(requestParameters.playlistId, requestParameters.itemId, requestParameters.newIndex, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Removes items from a playlist.
     * @param {PlaylistsApiRemoveFromPlaylistRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlaylistsApi
     */
    public removeFromPlaylist(requestParameters: PlaylistsApiRemoveFromPlaylistRequest, options?: any) {
        return PlaylistsApiFp(this.configuration).removeFromPlaylist(requestParameters.playlistId, requestParameters.entryIds, options).then((request) => request(this.axios, this.basePath));
    }
}
