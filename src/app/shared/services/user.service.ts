import { Injectable, inject, signal, effect } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { User, Credentials, LoggedInUser } from '../interfaces/user';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

const API_URL = `${environment.apiURL}/api/users`
const API_URL_AUTH = `${environment.apiURL}/api/auth`

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http: HttpClient = inject(HttpClient);
  router = inject(Router);

  user$ = signal<LoggedInUser | null>(null)

  constructor() {
    effect(() => {
      if (this.user$()){
        console.log("User Logged In", this.user$()?.username);
      } else {
        console.log("No user Logged in");
      }
    }) 
  }
  registerUser(user:User) {
    return this.http.post<{status: boolean, data: User}>(`${API_URL}`, user)
  }

  check_duplicate_email(email: string) {
    return this.http.get<{status: boolean, data:User}>(
      `${API_URL}/check_duplicate_email/${email}`
    )
  }

  loginUser(credentials: Credentials){
    return this.http.post<{status:boolean, data:string}>(
      `${API_URL_AUTH}/login`,credentials
    )
  }

  logoutUser(){
    this.user$.set(null);
    localStorage.removeItem('access_token');
    this.router.navigate(['login']);
  }

  isTokenExpired():boolean{
    const token = localStorage.getItem('access_token');
    if (!token) return true;
    try {
      const decoded = jwtDecode(token);
      const exp = decoded.exp;
      const now = Math.floor(Date.now() / 1000);
      if (exp) return exp < now; 
      return true;
    } catch (err) {
      return true;
    }
  }

  redirectToGoogleLogin() {
    const clientId = '994734206677-s3gdb06n1vv2d81knlkjm1s0h8ffhelc.apps.googleusercontent.com';
    const redirectUri = 'http://localhost:3000/api/auth/google/callback';
    const scope = 'email profile';
    const responseType = 'code';
    const accessType = 'offline'
    
    const url = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}&access_type=${accessType}`;

    window.location.href = url;
  }
}