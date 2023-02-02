import { Injectable } from '@angular/core';
import { Trabajo } from '../models/Trabajo';
import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';



const htttOptions = {
  headers:new HttpHeaders({
    'Content-Type': 'application/json'
  }) 
}

@Injectable({
  providedIn: 'root'
})
export class TrabajosService {


  private urlTrabajo:string = 'https://domestic-tammie-caloniadrianoj.koyeb.app/api/job'
  //'http://localhost:8080/api/job' 

  constructor(private http: HttpClient) { }
 

//Trabajos
getTrabajos(): Observable<Trabajo[]> {
  const urlJob = `${this.urlTrabajo}/person/${1}`;
  return this.http.get<Trabajo[]>(urlJob)
}

//Crear Trabajo
addTrabajo(trabajo: Trabajo): Observable<Trabajo>{
  const urlJOb = `${this.urlTrabajo}/person/${1}`;
  return this.http.post<Trabajo>(urlJOb, trabajo)
}

//Borrar Trabajo
deleteTrabajo(trabajo:Trabajo): Observable<Trabajo> {
  const url = `${this.urlTrabajo}/${trabajo.id}`;
  return this.http.delete<Trabajo>(url)
}

//Actualizar o Modificar Trabajo
updateTrabajo(trabajo: Trabajo, id:any): Observable<Trabajo>{
  const urlJob = `${this.urlTrabajo}/${id}`;
  return this.http.put<Trabajo>(urlJob, trabajo)
}

}
