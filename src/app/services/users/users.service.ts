import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userUrl= 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.userUrl);
  }

  addUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.userUrl);
  }

  editUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.userUrl);
  }

  deleteUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.userUrl);
  }
}
