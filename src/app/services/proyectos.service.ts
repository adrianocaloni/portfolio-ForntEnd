import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Proyecto } from '../models/Proyecto';

const htttOptions = {
  headers:new HttpHeaders({
    'Content-Type': 'application/json'
  }) 
}

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  private urlProyect:string = 'https://domestic-tammie-caloniadrianoj.koyeb.app/api/project'
  //'http://localhost:8080/api/project' 
  constructor(private http: HttpClient) { }

//Proyectos
getProyectos(id:any): Observable<Proyecto[]> {
  const urlJob = `${this.urlProyect}/person/${id}`;
  return this.http.get<Proyecto[]>(urlJob)
}

//Crear Proyecto
addProyecto(proyecto: Proyecto, id:any): Observable<Proyecto>{
  const urlJOb = `${this.urlProyect}/person/${id}`;
  return this.http.post<Proyecto>(urlJOb, proyecto)
}


//Borrar Proyecto
deleteProyecto(proyecto:Proyecto): Observable<Proyecto> {
  const url = `${this.urlProyect}/${proyecto.id}`;
  return this.http.delete<Proyecto>(url)
}

updateProyecto(proyecto: Proyecto, id:any): Observable<Proyecto>{
  const url = `${this.urlProyect}/${id}`;
  return this.http.put<Proyecto>(url, proyecto)
}


}
