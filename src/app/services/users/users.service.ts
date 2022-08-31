import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType} from '@angular/common/http';
import {Observable} from "rxjs";

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

  getUsersById(id: string): Observable<any[]> {
    return this.http.get<any[]>(this.userUrl + '/' + id);
  }

  addUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.userUrl);
  }

  editUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.userUrl);
  }

  deleteUsers(id: string): Observable<any[]> {
    return this.http.delete<any[]>(this.userUrl + '/' + id);
  }
}
