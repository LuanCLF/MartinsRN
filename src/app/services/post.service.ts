import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { apirUrl } from './variables';
import { Observable } from 'rxjs';
import { ICreateHosting, IHosting } from '../interfaces/post/hosting.';
import { ICreateFeeding, IFeeding } from '../interfaces/post/feeding.';
import { ICreateEvent, IEvent } from '../interfaces/post/event.';
import { ICreateImage } from '../interfaces/post/post.';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = apirUrl;
  

  constructor(private http: HttpClient,
  private storageService: StorageService
) {
}

addImagePost(file: File, id: string, category: string): Observable<{ message: string } | { conflict: boolean, message: string, status: number } | string> {
  const token = this.storageService.getItem('token');
  
  if (token === null) return new Observable(observer => observer.next("sem token"));

  const formData = new FormData();
  formData.append('image', file); 
  formData.append('id', id); 
  formData.append('category', category);

  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });

  return new Observable(observer => {
    this.http.post<any>(`${this.apiUrl}/upload`, formData, { headers }).subscribe({
      next: response => {
        console.log({ response });
        observer.next(response);
        observer.complete();
      },
      error: error => {
        console.log(error);
        observer.error({ conflict: false, message: error.message, status: error.status });
      }
    });
  });
}




getHostings(page?: number): Observable< IHosting[] | null | string> {
  const token = this.storageService.getItem('token');
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}` 
  });

  if (token === null) return new Observable(observer => observer.next("sem token"));

  return new Observable(observer => {
    this.http.get<any>(`${this.apiUrl}/hosp?page=${page ? page : 1}`, {headers} ).subscribe({
      next: response => {
        observer.next(response);
        observer.complete();
      },
      error: error => {
        observer.error({ conflict: false, message: error.messagem, status: error.status });
      }
    });
  });
}

getFeeding(page?: number): Observable< IFeeding[] | null | string> {
  const token = this.storageService.getItem('token');
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}` 
  });

  if (token === null) return new Observable(observer => observer.next("sem token"));

  return new Observable(observer => {
    this.http.get<any>(`${this.apiUrl}/food?page=${page ? page : 1}`, {headers} ).subscribe({
      next: response => {
        observer.next(response);
        observer.complete();
      },
      error: error => {
        observer.error({ conflict: false, message: error.messagem, status: error.status });
      }
    });
  });
}

getEvents(page?: number): Observable< IEvent[] | null | string> {
  const token = this.storageService.getItem('token');
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}` 
  });

  if (token === null) return new Observable(observer => observer.next("sem token"));

  return new Observable(observer => {
    this.http.get<any>(`${this.apiUrl}/event?page=${page ? page : 1}`, {headers} ).subscribe({
      next: response => {
        observer.next(response);
        observer.complete();
      },
      error: error => {
        observer.error({ conflict: false, message: error.messagem, status: error.status });
      }
    });
  });
}

addHostPost(data: ICreateHosting): Observable< { message: string } | { conflict: boolean, message: string, status: number } | string > {
  const token = this.storageService.getItem('token');
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });

  if (token === null) return new Observable(observer => observer.next("sem token"));

 

  return new Observable(observer => {
    this.http.post<any>(`${this.apiUrl}/hosp`, data, { headers }).subscribe({
      next: response => {
        console.log({ response });
        observer.next(response);
        observer.complete();
      },
      error: error => {
        console.log(error);
        observer.error({ conflict: false, message: error.message, status: error.status });
      }
    });
  });
}

addFeedingPost(data: ICreateFeeding): Observable< { message: string } | { conflict: boolean, message: string, status: number } | string > {
  const token = this.storageService.getItem('token');
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });

  if (token === null) return new Observable(observer => observer.next("sem token"));

  return new Observable(observer => {
    this.http.post<any>(`${this.apiUrl}/food`, data, { headers }).subscribe({
      next: response => {
        console.log({ response });
        observer.next(response);
        observer.complete();
      },
      error: error => {
        console.log(error);
        observer.error({ conflict: false, message: error.message, status: error.status });
      }
    });
  });
}

addEventPost(data: ICreateEvent): Observable< { message: string } | { conflict: boolean, message: string, status: number } | string >
{
  const token = this.storageService.getItem('token');
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });

  if (token === null) return new Observable(observer => observer.next("sem token"));

  return new Observable(observer => {
    this.http.post<any>(`${this.apiUrl}/event`, data, { headers }).subscribe({
      next: response => {
        console.log({ response });
        observer.next(response);
        observer.complete();
      },
      error: error => {
        console.log(error);
        observer.error({ conflict: false, message: error.message, status: error.status });
      }
    });
  });
}

deleteHostPost(id: string): Observable< { message: string } | { conflict: boolean, message: string, status: number } | string > {
  const token = this.storageService.getItem('token');
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });

  if (token === null) return new Observable(observer => observer.next("sem token"));

  return new Observable(observer => {
    this.http.delete<any>(`${this.apiUrl}/hosp/${id}`, {headers}).subscribe({
      next: response => {
        observer.next(response);
        observer.complete();
      },
      error: error => {
        observer.error({ conflict: false, message: error.messagem, status: error.status });
      }
    });
  });
}

deleteFeedingPost(id: string): Observable< { message: string } | { conflict: boolean, message: string, status: number } | string >
{
  const token = this.storageService.getItem('token');
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });

  if (token === null) return new Observable(observer => observer.next("sem token"));

  return new Observable(observer => {
    this.http.delete<any>(`${this.apiUrl}/food/${id}`, {headers}).subscribe({
      next: response => {
        observer.next(response);
        observer.complete();
      },
      error: error => {
        observer.error({ conflict: false, message: error.messagem, status: error.status });
      }
    });
  });
}

deleteEventPost(id: string): Observable< { message: string } | { conflict: boolean, message: string, status: number } | string >
{
  const token = this.storageService.getItem('token');
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });

  if (token === null) return new Observable(observer => observer.next("sem token"));

  return new Observable(observer => {
    this.http.delete<any>(`${this.apiUrl}/event/${id}`, {headers}).subscribe({
      next: response => {
        observer.next(response);
        observer.complete();
      },
      error: error => {
        observer.error({ conflict: false, message: error.messagem, status: error.status });
      }
    });
  });
}

}