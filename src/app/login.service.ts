import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Login } from './login';




@Injectable({
  providedIn: 'root'
})
export class LoginService {

  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

  private baseUrl='http://localhost:8080/welcome'
  constructor(private httpClient: HttpClient) { }


  // Login(Login:Login):Observable<Login>{
  //   return this.httpClient.post<Login>(`${this.baseUrl}`,Login);
  // }
  Login(Login:Login):Observable<any>{
    return this.httpClient.post(`${this.baseUrl}`,Login);
  }
}


  

  
  



