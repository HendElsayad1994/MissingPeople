import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

export interface Ichildinfo{
  childId:number;
  locationId:number;
  from:string;
  to:string;
  sat:boolean;
  sun:boolean;
  mon:boolean;
  tues:boolean;
  thurs:boolean;
  wedns:boolean;
  fri:boolean;

}

@Injectable()
export class ChildinfoService {

  constructor(private _Http:Http) {

   }
   recentLocation(id:number){
    this._Http.get('http://localhost:28529/api/Schadual/'+id);
   }

}
