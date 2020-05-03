import { Type } from '@angular/core';
import { Store } from '@ngxs/store';
import { PlainObject, StateClass } from '@ngxs/store/internals';
import { Subject, Subscription } from 'rxjs';

import { Any } from './any';
import { NgxsRepositoryMeta } from './repository';

export interface DataStorage<T = string, U = string> {
    getItem(key: string): T;

    setItem(key: string, val: U): void;

    removeItem(key: string): void;

    clear(): void;
}

export type DecodingType = 'base64' | 'none';

export const enum TTL_EXPIRED_STRATEGY {
    REMOVE_KEY_AFTER_EXPIRED,
    SET_NULL_DATA_AFTER_EXPIRED,
    DO_NOTHING_AFTER_EXPIRED
}

interface CommonPersistenceProvider {
    /**
     * Path for slice
     * default: state.name
     */
    path?: string;

    /**
     * Version for next migrate
     * default: 1
     */
    version?: number;

    /**
     * Time to live in ms
     * default: -1
     */
    ttl?: number;

    /**
     * The time, in milliseconds (thousandths of a second),
     * the timer should delay in between checking for expiration time live.
     * default: 60000ms (1min)
     */
    ttlDelay?: number;

    /**
     *
     */
    ttlExpiredStrategy?: TTL_EXPIRED_STRATEGY;

    /**
     * decode/encoded
     */
    decode?: DecodingType;

    /**
     * prefix for key
     * default: '@ngxs.store.'
     */
    prefixKey?: string;

    /**
     * sync with null value from storage
     * default: false
     */
    nullable?: boolean;

    /**
     * sync storage from state after init
     * default: true
     */
    fireInit?: boolean;

    /**
     * Pull initial state from storage on startup
     * default: true
     */
    rehydrate?: boolean;

    /**
     * default: current state instance
     */
    stateInstance?: StateClass;
}

export type ExistingStorageEngine = DataStorage | Storage;

export interface ExistingEngineProvider extends CommonPersistenceProvider {
    /**
     * Storage container
     * default: window.localStorage
     */
    existingEngine: ExistingStorageEngine;
}

export interface UseClassEngineProvider extends CommonPersistenceProvider {
    /**
     * Storage class from DI
     */
    useClass: Type<unknown>;
}

export type PersistenceProvider = ExistingEngineProvider | UseClassEngineProvider;

export interface StorageMeta<T> {
    data: T | null;
    version: number;
    lastChanged: string;
    expiry?: string;
}

export interface StorageContainer<T = Set<PersistenceProvider>, K = string> {
    providers: T;
    keys: Map<K, void>;

    getProvidedKeys(): string[];
}

export interface DataStoragePlugin {
    readonly size: number;
    readonly store: Store | null;
    readonly providers: Set<PersistenceProvider>;
    readonly entries: IterableIterator<[PersistenceProvider, PersistenceProvider]>;

    serialize(data: Any, provider: PersistenceProvider): string;

    deserialize<T>(meta: StorageMeta<T>, value: string | null): T | null;

    destroyOldTasks(): void;
}

export interface GlobalStorageOptionsHandler {
    key: string;
    value: string | null;
    engine: ExistingStorageEngine;
    provider: PersistenceProvider;
}

export interface NgxsDataExpiredEvent {
    key: string;
    expiry: string;
    timestamp: string;
}

export interface NgxsDataAfterExpired {
    expired$: Subject<NgxsDataExpiredEvent>;

    ngxsDataAfterExpired?(event: NgxsDataExpiredEvent, provider: PersistenceProvider): void;
}

export interface TtlListenerOptions {
    subscription: Subscription;
    startListen: string | null;
    endListen: string | null;
}

export interface TtLCreatorOptions {
    provider: PersistenceProvider;
    expiry: Date;
    map: WeakMap<PersistenceProvider, TtlListenerOptions>;
    engine: ExistingStorageEngine;
}

export interface CreateStorageDefaultOptions {
    prefix: string;
    meta: NgxsRepositoryMeta;
    decodeType: DecodingType;
    stateInstance: StateClass;
}

export interface PullFromStorageOptions<T> {
    provider: PersistenceProvider;
    meta: StorageMeta<T>;
    data: T;
}

export interface PullFromStorageInfo {
    canBeOverrideFromStorage: boolean;
    expiry: Date | null;
    expired: boolean;
}

export interface RehydrateInfo {
    states: PlainObject;
    rehydrateIn: boolean;
}

export interface CheckExpiredInitOptions {
    info: PullFromStorageInfo;
    options: GlobalStorageOptionsHandler;
    rehydrateInfo: RehydrateInfo;
}