import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Userlog } from './userlog';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  urll="http://localhost:5000/api/";

  constructor(private http:HttpClient) { }

  enroll(Userlog: Userlog){
    return this.http.post<any>(this.urll+'values/LoginData', Userlog);
  }

  getDeptList():Observable<any[]>{
    return  this.http.get<any>(`${environment.url}`+'api/values');
  }
  addDeptlist(val:any){
    return this.http.post(`${environment.url}`+'api/values',val);
  }
  updatedep(val:any){
    return this.http.put(`${environment.url}`+'api/values',val);
  }


  getDataList():Observable<any[]>{
    return  this.http.get<any>(`${environment.url}`+'api/Edata');
  }
  addDatalist(val:any){
    return this.http.post(`${environment.url}`+'api/Edata',val);
  }
  updatedata(val:any){
    return this.http.put(`${environment.url}`+'api/Edata',val);
  }
}
