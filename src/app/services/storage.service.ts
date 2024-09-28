import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { IHostings } from '../interfaces/post/hosting.';
import { IFeedings } from '../interfaces/post/feeding.';
import { IEvents } from '../interfaces/post/event.';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  setItem(key: string, value: string): void {
    if (this.isBrowser) {
      localStorage.setItem(key, value);
    }
  }

  getItem(key: string): string | null {
    if (this.isBrowser) {
      return localStorage.getItem(key);
    }
    return null;
  }

  removeItem(key: string): void {
    if (this.isBrowser) {
      localStorage.removeItem(key);
    }
  }

  setPost(key: string, value: IHostings[] | IFeedings[] | IEvents[]): void {
    if (this.isBrowser) {
      localStorage.setItem(key, JSON.stringify(value))
    }
  }

  getPost(key: string): IHostings[] | IFeedings[] | IEvents[] | undefined {
    if(this.isBrowser){
      const item = localStorage.getItem(key);
      if (item) {
        if(key == 'host') return JSON.parse(item) as IHostings[];
        if(key == 'feed') return JSON.parse(item) as IFeedings[];
        if(key == 'event') return JSON.parse(item) as IEvents[];
      }
    }

    return undefined;
  }
}