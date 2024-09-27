import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { apiUrl } from './variables';
import { Observable } from 'rxjs';
import { ICreateHosting, IHosting, IHostings } from '../interfaces/post/hosting.';
import { ICreateFeeding, IFeeding, IFeedings } from '../interfaces/post/feeding.';
import { ICreateEvent, IEvent, IEvents } from '../interfaces/post/event.';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = apiUrl;

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}

  addImagePost(
    file: File,
    id: string,
    category: string
  ): Observable<
    | { message: string }
    | { conflict: boolean; message: string; status: number }
    | string
  > {
    const token = this.storageService.getItem('token');

    if (token === null)
      return new Observable((observer) => observer.next('sem token'));

    const formData = new FormData();
    formData.append('image', file);
    formData.append('id', id);
    formData.append('category', category);

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return new Observable((observer) => {
      this.http
        .post<any>(`${this.apiUrl}/upload`, formData, { headers })
        .subscribe({
          next: (response) => {
            console.log({ response });
            observer.next(response);
            observer.complete();
          },
          error: (error) => {
            console.log(error);
            observer.error({
              conflict: false,
              message: error.message,
              status: error.status,
            });
          },
        });
    });
  }

  getAllHostings(page: number): Observable<IHostings[] | null | string>  {
    return new Observable((observer) => {
      this.http.get<any>(`${this.apiUrl}/hosps?page=${page}`).subscribe({
        next: (response) => {
          observer.next(response);
          observer.complete();
        },
        error: (error) => {
          observer.error({
            conflict: false,
            message: error.message,
            status: error.status,
          });
        },
      });
    });
  }

  getAllFeedings(page: number): Observable<IFeedings[] | null | string> {
    return new Observable((observer) => {
      this.http.get<any>(`${this.apiUrl}/foods?page=${page}`).subscribe({
        next: (response) => {
          observer.next(response);
          observer.complete();
        },
        error: (error) => {
          observer.error({
            conflict: false,
            message: error.message,
            status: error.status,
          });
        },
      });
    });
  }

  getAllEvents(page: number): Observable<IEvents[] | null | string> {
    return new Observable((observer) => {
      this.http.get<any>(`${this.apiUrl}/events?page=${page}`).subscribe({
        next: (response) => {
          observer.next(response);
          observer.complete();
        },
        error: (error) => {
          observer.error({
            conflict: false,
            message: error.message,
            status: error.status,
          });
        },
      });
    });
  }

  getHostings(page?: number): Observable<IHosting[] | null | string> {
    const token = this.storageService.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    if (token === null)
      return new Observable((observer) => observer.next('sem token'));

    return new Observable((observer) => {
      this.http
        .get<any>(`${this.apiUrl}/hosp?page=${page ? page : 1}`, { headers })
        .subscribe({
          next: (response) => {
            observer.next(response);
            observer.complete();
          },
          error: (error) => {
            observer.error({
              conflict: false,
              message: error.message,
              status: error.status,
            });
          },
        });
    });
  }

  getFeeding(page?: number): Observable<IFeeding[] | null | string> {
    const token = this.storageService.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    if (token === null)
      return new Observable((observer) => observer.next('sem token'));

    return new Observable((observer) => {
      this.http
        .get<any>(`${this.apiUrl}/food?page=${page ? page : 1}`, { headers })
        .subscribe({
          next: (response) => {
            observer.next(response);
            observer.complete();
          },
          error: (error) => {
            observer.error({
              conflict: false,
              message: error.message,
              status: error.status,
            });
          },
        });
    });
  }

  getEvents(page?: number): Observable<IEvent[] | null | string> {
    const token = this.storageService.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    if (token === null)
      return new Observable((observer) => observer.next('sem token'));

    return new Observable((observer) => {
      this.http
        .get<any>(`${this.apiUrl}/event?page=${page ? page : 1}`, { headers })
        .subscribe({
          next: (response) => {
            observer.next(response);
            observer.complete();
          },
          error: (error) => {
            observer.error({
              conflict: false,
              message: error.message,
              status: error.status,
            });
          },
        });
    });
  }

  addHostPost(
    data: ICreateHosting
  ): Observable<
    | { message: string }
    | { conflict: boolean; message: string; status: number }
    | string
  > {
    const token = this.storageService.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    if (token === null)
      return new Observable((observer) => observer.next('sem token'));

    return new Observable((observer) => {
      this.http.post<any>(`${this.apiUrl}/hosp`, data, { headers }).subscribe({
        next: (response) => {
          console.log({ response });
          observer.next(response);
          observer.complete();
        },
        error: (error) => {
          console.log(error);
          observer.error({
            conflict: false,
            message: error.message,
            status: error.status,
          });
        },
      });
    });
  }

  addFeedingPost(
    data: ICreateFeeding
  ): Observable<
    | { message: string }
    | { conflict: boolean; message: string; status: number }
    | string
  > {
    const token = this.storageService.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    if (token === null)
      return new Observable((observer) => observer.next('sem token'));

    return new Observable((observer) => {
      this.http.post<any>(`${this.apiUrl}/food`, data, { headers }).subscribe({
        next: (response) => {
          console.log({ response });
          observer.next(response);
          observer.complete();
        },
        error: (error) => {
          console.log(error);
          observer.error({
            conflict: false,
            message: error.message,
            status: error.status,
          });
        },
      });
    });
  }

  addEventPost(
    data: ICreateEvent
  ): Observable<
    | { message: string }
    | { conflict: boolean; message: string; status: number }
    | string
  > {
    const token = this.storageService.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    if (token === null)
      return new Observable((observer) => observer.next('sem token'));

    return new Observable((observer) => {
      this.http.post<any>(`${this.apiUrl}/event`, data, { headers }).subscribe({
        next: (response) => {
          console.log({ response });
          observer.next(response);
          observer.complete();
        },
        error: (error) => {
          console.log(error);
          observer.error({
            conflict: false,
            message: error.message,
            status: error.status,
          });
        },
      });
    });
  }

  deleteHostPost(
    id: string
  ): Observable<
    | { message: string }
    | { conflict: boolean; message: string; status: number }
    | string
  > {
    const token = this.storageService.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    if (token === null)
      return new Observable((observer) => observer.next('sem token'));

    return new Observable((observer) => {
      this.http
        .delete<any>(`${this.apiUrl}/hosp/${id}`, { headers })
        .subscribe({
          next: (response) => {
            observer.next(response);
            observer.complete();
          },
          error: (error) => {
            observer.error({
              conflict: false,
              message: error.message,
              status: error.status,
            });
          },
        });
    });
  }

  deleteFeedingPost(
    id: string
  ): Observable<
    | { message: string }
    | { conflict: boolean; message: string; status: number }
    | string
  > {
    const token = this.storageService.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    if (token === null)
      return new Observable((observer) => observer.next('sem token'));

    return new Observable((observer) => {
      this.http
        .delete<any>(`${this.apiUrl}/food/${id}`, { headers })
        .subscribe({
          next: (response) => {
            observer.next(response);
            observer.complete();
          },
          error: (error) => {
            observer.error({
              conflict: false,
              message: error.message,
              status: error.status,
            });
          },
        });
    });
  }

  deleteEventPost(
    id: string
  ): Observable<
    | { message: string }
    | { conflict: boolean; message: string; status: number }
    | string
  > {
    const token = this.storageService.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    if (token === null)
      return new Observable((observer) => observer.next('sem token'));

    return new Observable((observer) => {
      this.http
        .delete<any>(`${this.apiUrl}/event/${id}`, { headers })
        .subscribe({
          next: (response) => {
            observer.next(response);
            observer.complete();
          },
          error: (error) => {
            observer.error({
              conflict: false,
              message: error.message,
              status: error.status,
            });
          },
        });
    });
  }
}
