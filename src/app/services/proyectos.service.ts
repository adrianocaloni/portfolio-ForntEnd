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

  private urlProyect:string = 'https://afternoon-sands-15469.herokuapp.com/api/project'

  constructor(private http: HttpClient) { }

  //Proyectos
getProyectos(): Observable<Proyecto[]> {
  const urlJob = `${this.urlProyect}/person/${1}`;
  return this.http.get<Proyecto[]>(urlJob)
}

//Crear Proyecto
addProyecto(proyecto: Proyecto): Observable<Proyecto>{
  const urlJOb = `${this.urlProyect}/person/${1}`;
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
