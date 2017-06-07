import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
export interface IChildren {
  Id:number;
  Lname:string;
  Parent_Id:number;
  Fname:string;
  Email:string;
  Password:number;
  ImageUrl:string;
  Telephone:number;
  Address_Street:string;
  Address_City:string;
  Address_Country:string;
  UserRole:number;
  viewFlag:boolean;

}

@Injectable()
export class ChildrenService {
  constructor(private _http:Http){ }

 getchildren(){
  return this._http.get('http://localhost:28529/api/child');
}
}



