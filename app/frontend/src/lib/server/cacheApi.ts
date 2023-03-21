import {LocalStorage} from 'node-localstorage';

const CACHE_KEY_PREFIX = 'api_cache_';
const CACHE_EXPIRATION_HOURS = 12;
const API_KEY = "dXCmYpgIRpFktpPImhLzryhFJ7N2h83f";
var server_localstorage = new LocalStorage('./cache_storage');

interface CachedData {
  data: any;
  lastFetchedTime: string;
}

export class CacheApi {
  private cacheKeyPrefix: string;
  private cacheExpirationHours: number;

  constructor(cacheKeyPrefix: string = CACHE_KEY_PREFIX, cacheExpirationHours: number = CACHE_EXPIRATION_HOURS) {
    this.cacheKeyPrefix = cacheKeyPrefix;
    this.cacheExpirationHours = cacheExpirationHours;
  }

  private isDataStale(lastFetchedTime: Date): boolean {
    const now = new Date();
    const diff = now.getTime() - lastFetchedTime.getTime();
    const hours = diff / (1000 * 60 * 60);
    return hours > this.cacheExpirationHours;
  }

  private getCacheKey(apiKey: string): string {
    return `${this.cacheKeyPrefix}${apiKey}`;
  }

  async getData(apiCall: string): Promise<any> {
    const apiKey = import.meta.env.API_KEY_BOOK;
    const cacheKey = this.getCacheKey(apiKey);
    const cachedDataStr = server_localstorage.getItem(cacheKey);
    let cachedData: CachedData;

    if (cachedDataStr) {
      cachedData = JSON.parse(cachedDataStr);

      if (!this.isDataStale(new Date(cachedData.lastFetchedTime))) {
        console.log('Get from cache');
        return cachedData.data;
      }
    }
    let callString = `${apiCall}?api-key=${API_KEY}`;
    console.log(callString);
    const response = await fetch(callString);
    const data = await response.json();

    const newCacheData: CachedData = {
      data,
      lastFetchedTime: new Date().toISOString()
    };
    server_localstorage.setItem(cacheKey, JSON.stringify(newCacheData));

    return data;
  }

  clearCache(apiKey?: string): void {
    if (apiKey) {
      const cacheKey = this.getCacheKey(apiKey);
      server_localstorage.removeItem(cacheKey);
    } else {
      const keysToRemove = Object.keys(server_localstorage).filter(key => key.startsWith(this.cacheKeyPrefix));
      keysToRemove.forEach(key => server_localstorage.removeItem(key));
    }
  }
}
