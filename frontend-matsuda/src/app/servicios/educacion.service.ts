import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  editEducacion(value: any) {
    throw new Error('Method not implemented.');
  }
  URL = `https://portfoliobackmatsuda.herokuapp.com/`;

  constructor(private http: HttpClient) { }

  public getEducacion(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(this.URL + `api/educacion`);
  }
  public addEducacion(educacion: Educacion): Observable<Educacion> {
    return this.http.post<Educacion>(this.URL + `api/educacion`, educacion);
  }
  public updateEducacion(educacion: Educacion): Observable<Educacion> {
    return this.http.put<Educacion>(this.URL + `api/educacion`, educacion);
  }
  public deleteEducacion(idEdu: number): Observable<void> {
    return this.http.delete<void>(this.URL + `api/educacion/${idEdu}`);
  }
}
