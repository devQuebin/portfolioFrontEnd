import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia.model'

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  editExperiencia(value: any) {
    throw new Error('Method not implemented.');
  }
  URL=`https://portfoliobackmatsuda.herokuapp.com/`;

  constructor(private http: HttpClient ) { }

  public getExperiencia(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.URL+ `api/experiencia`);
  }
  public addExperiencia(experiencia: Experiencia):Observable<Experiencia>{
    return this.http.post<Experiencia>(this.URL+`api/experiencia`, experiencia);
  }
  public updateExperiencia(experiencia: Experiencia):Observable<Experiencia>{
    return this.http.put<Experiencia>(this.URL+`api/experiencia`, experiencia);
  }
  public deleteExperiencia(idExp: number):Observable<void>{
    return this.http.delete<void>(this.URL+`api/experiencia/${idExp}`);
  }
}
