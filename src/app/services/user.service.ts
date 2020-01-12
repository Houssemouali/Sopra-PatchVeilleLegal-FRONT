import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'Rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private adminUrl = 'http://localhost:8080/api/test/admin';


  constructor(private http: HttpClient) { }
  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminUrl, { responseType: 'text' });
  }
}
