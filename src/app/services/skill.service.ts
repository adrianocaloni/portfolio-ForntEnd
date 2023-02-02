import { Injectable } from '@angular/core'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Skill } from '../models/Skill';


const htttOptions = {
  headers:new HttpHeaders({
    'Content-Type': 'application/json'
  }) 
}
@Injectable({
  providedIn: 'root'
})
export class SkillService {
  
  private urlSkill:string = 'https://domestic-tammie-caloniadrianoj.koyeb.app/api/skill'
  //'http://localhost:8080/api/skill'

  constructor(private http: HttpClient) { }

  
//Skills
getSkill(): Observable<Skill[]> {
  const url = `${this.urlSkill}/person/${1}`;
  return this.http.get<Skill[]>(url)
}

getSkillById(id: any): Observable<Skill[]> {
  const url = `${this.urlSkill}/${id}`;
  return this.http.get<Skill[]>(url)
}

detailSkill(id: any): Observable<Skill[]> {
  return this.http.get<Skill[]>(this.urlSkill + `/${id}`);
}
//Crear Skill
addSkill(skill: Skill): Observable<Skill>{
  const url = `${this.urlSkill}/person/${1}`;
  return this.http.post<Skill>(url, skill)
}

//Eliminar Skill
deleteSkill(skill:Skill): Observable<Skill> {
  const url = `${this.urlSkill}/${skill.id}`;
  return this.http.delete<Skill>(url)
}

updateSkill(skill: Skill, id:any): Observable<Skill>{
  const url = `${this.urlSkill}/${id}`;
  return this.http.put<Skill>(url, skill)
}

}
