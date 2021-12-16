import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private backendUrl = 'http://localhost:8000';
  private apiUrl = '/api/users/';
  private apiUrluser = '/api/user/';
  private loginUrl = '/api/login/';
  private emailUrl = '/api/checkemail/';

  //userList: User[] = [];

  constructor(private http: HttpClient) {
    
   }

   

   getUsuariobyId(id: String): Observable<any>{
    return this.http.get(this.backendUrl + this.apiUrluser + id);
  }

  getUsuario(user: any): Observable<any>{
    return this.http.post(this.backendUrl + this.loginUrl, user); 
  }

  getUsuarios(tipo: String): Observable<any>{
    //console.log(tipo);
    return this.http.get(this.backendUrl + this.apiUrl + tipo);
  }

  saveUsuario(user: any): Observable<any>{
      return this.http.post(this.backendUrl + this.apiUrl, user);
  }

  checkEmail(mail: String): Observable<any>{
    return this.http.get(this.backendUrl + this.emailUrl + mail);
  }

  getAllUsuarios(): Observable<any>{
    return this.http.get(this.backendUrl + this.apiUrl);
  }

}
