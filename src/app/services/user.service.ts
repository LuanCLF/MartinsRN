import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apirUrl } from './variables';
import { IUserLogin, IUserRegister } from '../interfaces/user.';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = apirUrl;
  private router = new Router();
  private isBrowser: boolean;
  

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object,
  private storageService: StorageService
) {
  this.isBrowser = isPlatformBrowser(this.platformId);
}

  register(user: IUserRegister): Observable<any> {
    return new Observable(observer => {
      this.http.post<any>(`${this.apiUrl}/user`, user).subscribe({
        next: response => {
          this.router.navigate(['/login']);
          observer.next(true);
          observer.complete();
        },
        error: error => {
          console.log(error.status)
          if (error.status === 409) {
            observer.error({ conflict: true, message: "Usuário já está cadastrado" });
          } else {
            console.error('Register failed', error);
            observer.error({ conflict: false, message: 'Registration failed' });
          }
        }
      });
    });
  }

  auth(user: IUserLogin): Observable<any> {
    return new Observable(observer => {
      this.http.post<any>(`${this.apiUrl}/login`,  user).subscribe({
        next: response => {
          this.storageService.setItem('token', response.token);
          this.storageService.setItem('name', response.name);
          this.router.navigate(['/']);
          observer.next(true);
          observer.complete();
        },
        error: error => {
          console.log(error.status)
          if (error.status === 404) {
            observer.error({ conflict: true, message: "Usuário não encontrado", status: 404 });
          } else if (error.status === 401) {
            observer.error({ conflict: true, message: "Senha inválida", status: 401 });
          }
           else {
            console.error('Register failed', error);
            observer.error({ conflict: false, message: 'login failed' });
          }
        }
      });
    });
  }

  logout(): void {
    if (this.isBrowser) {
      this.storageService.removeItem('token');
    }
  }

  isLoggedIn(): boolean {
    if (this.isBrowser) {
      return !!this.storageService.getItem('token');
    }
    return false;
  }
}