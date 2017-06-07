import { Injectable } from '@angular/core';
import { Http,RequestOptions,URLSearchParams } from "@angular/http";

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

  getparent(n,p){
    let params:URLSearchParams=new URLSearchParams();
    params.set('',n);
    params.set('',p);
     let request=new RequestOptions();
     request.search=params;
    return this._http.get('http://localhost:28529/api/login',request).subscribe(res=>res.json());
  }

}
