import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  URL=`https://portfoliobackmatsuda.herokuapp.com/`;

  constructor(private http: HttpClient) { }

  public getUser(): Observable<User>{
    return this.http.get<User>(this.URL+ `api/info/1`);
  }
    public updateUser(user: User):Observable<User>{
    return this.http.put<User>(this.URL+`api/info/`, user);
  }
}
