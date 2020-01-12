import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private url = 'http://localhost:8080/api/files/history';
  public history:any=[]; 
  constructor(private http:HttpClient) { 

  }
  gethistory(){
      
    this.history=this.http.get(this.url);
    return this.history;
  }
}

