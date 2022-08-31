import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import { IUser } from 'src/app/users/users.config';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.userUrl);
  }

  getUserById(id: string): Observable<any[]> {
    return this.http.get<any[]>(this.userUrl + '/' + id);
  }

  addUser(user: IUser): Observable<any[]> {
    return this.http.post<any>(this.userUrl, user, httpOptions);
  }

  editUser(id: string, user: IUser):Observable<any> {
    return this.http.put(this.userUrl + '/' + id, user, httpOptions);
  }


  deleteUser(id: string): Observable<any[]> {
    return this.http.delete<any[]>(this.userUrl + '/' + id);
  }
}
