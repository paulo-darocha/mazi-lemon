import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CacheService {
   public getItem<T>() {}

   public setItem(key: string, data: object | string) {
      if (typeof data === 'string') {
         localStorage.setItem(key, data);
      }
      localStorage.setItem(key, JSON.stringify(data));
   }

   public removeItem(key: string) {
      localStorage.removeItem(key);
   }

   public clear() {
      localStorage.clear();
   }
}
