import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';



@Injectable({
  providedIn: 'root'
})
export class UploadService {

  getAll(): any {
    throw new Error("Method not implemented.");
  }
  constructor(private  http: HttpClient) {  }
  name: any={};


  pushFileToStorage(file: File,name:string): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    formdata.append('file', file);
    formdata.append('name', name);
    const req = new HttpRequest('POST', '/api/auth/upload', formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get('/api/file/files');
  }

  getData():Observable <any>{
    
    return this.http.get('http://localhost:8080/api/dataParts/PartD')
  }
  getModels():Observable <any>{
    
    return this.http.get('http://localhost:8080/patchzd/getModels')
  }
  //id : number
  public createData(id:number){
    
     // return this.http.post("http://localhost:8080/api/dataParts/ajoutData", id);
           return this.http.get("http://localhost:8080/patchzd/ajoutData/"+ id);

    
  }


  
  public EditData(id){
    
    return this.http.post("http://localhost:8080/api/dataParts/ModifData", id);
  
}
//getNewCode;
getCodeN(){
  return this.http.get('http://localhost:8080/patchzd/getCodeR')
}


//getCompteRendu;
getRendu():Observable <any>{
    
  return this.http.get('http://localhost:8080/api/dataParts/compteRendu')
}
}
