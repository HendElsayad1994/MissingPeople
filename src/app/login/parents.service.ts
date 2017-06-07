import { Injectable } from '@angular/core';
import { Http,Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs';
export interface Iparent{
Id:number;
Lname:string;
Fname:string;
Email:string;
Password:string;
ImageUrl:string;
Telephone:string;
Address_Street:string;
Address_City:string;
Address_Country:string;
UserRole:number;
viewFlag:number;

}

@Injectable()
export class ParentsService {

  constructor(private _http:Http) { }
  private commentsUrl = 'http://localhost:28529/api'; 
getparent() : Observable<any> {

         // ...using get request
         return this._http.get(`${this.commentsUrl}/parent`)
                        // ...and calling .json() on the response to return data
                         .map((res:Response) =>{ 
                           return res.json()})
                         //...errors if any
                        // .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     }






  /*getparent(n,p){
    let params:URLSearchParams=new URLSearchParams();
    params.set('',n);
    params.set('',p);
     let request=new RequestOptions();
     request.search=params;
    return this._http.get('http://localhost:28529/api/login',request).subscribe(res=>res.json());
  }*/




/*getparent(){
    return this._http.get('http://localhost:28529/api/parent');

}*/

}
