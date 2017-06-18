import { Injectable } from '@angular/core';
import { Http,Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs';



@Injectable()
export class ParentsService {


  private commentsUrl = 'http://trackapi.gear.host/api'; 
    constructor(private _http:Http) { }
getparent() : Observable<any> {

         // ...using get request
         return this._http.get(`${this.commentsUrl}/parent`)
                        // ...and calling .json() on the response to return data
                         .map((res:Response) =>{ 
                           return res.json()})
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     }

}
