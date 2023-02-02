import { Injectable } from '@angular/core'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Estudio } from '../models/Estudio';


const htttOptions = {
  headers:new HttpHeaders({
    'Content-Type': 'application/json'
  }) 
}

@Injectable({
  providedIn: 'root'
})
export class EstudiosService {

  private urlEducation:string = 'https://domestic-tammie-caloniadrianoj.koyeb.app/api/education'
  //'http://localhost:8080/api/education' 
  //'https://ancient-gorge-89370.herokuapp.com/api/education'
 
  constructor(private http: HttpClient) { }

  
//Estudios
getEstudios(): Observable<Estudio[]> {
  const urlEdu = `${this.urlEducation}/person/${1}`;
  return this.http.get<Estudio[]>(urlEdu)
}

getEstudiosById(id: any): Observable<Estudio[]> {
  const urlEdu = `${this.urlEducation}/${id}`;
  return this.http.get<Estudio[]>(urlEdu)
}

detailEstudio(id: any): Observable<Estudio[]> {
  return this.http.get<Estudio[]>(this.urlEducation + `/${id}`);
}
//Crear Estudio
addEstudio(estudio: Estudio): Observable<Estudio>{
  const urlEdu = `${this.urlEducation}/person/${1}`;
  return this.http.post<Estudio>(urlEdu, estudio)
}

//Eliminar Estudio
deleteEstudio(estudio:Estudio): Observable<Estudio> {
  const url = `${this.urlEducation}/${estudio.id}`;
  return this.http.delete<Estudio>(url)
}


//Actualizar Estudios
updateEstudio(estudio: Estudio, id:any): Observable<Estudio>{
  console.log("hola")
  const urlEdu = `${this.urlEducation}/${id}`;
  return this.http.put<Estudio>(urlEdu, estudio)
}

}
