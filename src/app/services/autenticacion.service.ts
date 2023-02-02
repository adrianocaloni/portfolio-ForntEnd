import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AutenticacionService {


constructor(private http: HttpClient){
  
}

public logueado = false;
loginUser(usuario:any){
  var httpOptions = {
    headers:new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  return this.http.post<any>("https://domestic-tammie-caloniadrianoj.koyeb.app/usuario/login",usuario,httpOptions)
  
  //http://localhost:8080/usuario/login
}

setLogin(login: boolean){
  return this.logueado = login;
}

getLogin(){
  return this.logueado;
}

}
