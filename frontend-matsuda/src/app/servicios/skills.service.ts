import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../model/skills.model';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  editSkills(value: any) {
  throw new Error('Method not implemented.');
}
URL=`https://portfoliobackmatsuda.herokuapp.com/`;

constructor(private http: HttpClient) { }

public getSkills(): Observable<Skills[]>{
  return this.http.get<Skills[]>(this.URL+ `api/skills`);
}
public addSkills(skills: Skills):Observable<Skills>{
  return this.http.post<Skills>(this.URL+`api/skills`, skills);
}
public updateSkills(skills: Skills):Observable<Skills>{
  return this.http.put<Skills>(this.URL+`api/skills`, skills);
}
public deleteSkills(idSkills: number):Observable<void>{
  return this.http.delete<void>(this.URL+`api/skills/${idSkills}`);
}
}

