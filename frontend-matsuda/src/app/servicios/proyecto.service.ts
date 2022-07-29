import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  editProyecto(value: any) {
    throw new Error('Method not implemented.');
  }
  URL = `https://portfoliobackmatsuda.herokuapp.com/`;

  constructor(private http: HttpClient) { }

  public getProyecto(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.URL + `api/proyecto`);
  }
  public addProyecto(proyecto: Proyecto): Observable<Proyecto> {
    return this.http.post<Proyecto>(this.URL + `api/proyecto`, proyecto);
  }
  public updateProyecto(proyecto: Proyecto): Observable<Proyecto> {
    return this.http.put<Proyecto>(this.URL + `api/proyecto`, proyecto);
  }
  public deleteProyecto(idProy: number): Observable<void> {
    return this.http.delete<void>(this.URL + `api/proyecto/${idProy}`);
  }
}

