import { Injectable } from '@angular/core';
import { Http,Response, Headers  } from "@angular/http";
import 'rxjs';
import { Observable } from "rxjs/Observable";
export interface IChildren {
  id?: number;
  Lname: string;
  Parent_Id: number;
  Fname: string;
  Email: string;
  Password: number;
  ImageUrl: string;
  Telephone: number;
  Address_Street: string;
  Address_City: string;
  Address_Country: string;
  UserRole: number;
  viewFlag: boolean;

}
export interface Ichildinfo {
  childId: number;
  location_Key: number;
  from: string;
  to: string;
  sat: boolean;
  sun: boolean;
  mon: boolean;
  tues: boolean;
  thurs: boolean;
  isWed: boolean;
  fri: boolean;
  name: string;

}

export interface IParent {
  id?: number;
  Lname: string;
  Parent_Id: number;
  Fname: string;
  Email: string;
  Password: number;
  ImageUrl: string;
  Telephone: number;
  Address_Street: string;
  Address_City: string;
  Address_Country: string;
  UserRole: number;
  viewFlag: boolean;

}
export interface IHistory{
  locationId?: number;
  serviceProvider: String;
  debug: boolean;
  time: number;
  accuracy: number;
  speed: number;
  longitude: number;
  latitude: number;
  altitude: number;
  altitudeAccuracy: number;
  bearing: number;
  timestamp: number;
  child_Id: number;
  coords: {
    latitude: number;
    longitude: number;
    altitude: number;
    speed: number;
    accuracy: number;
    altitudeAccuracy: number;
    heading: number;
  };
  viewFlag: boolean;
}

@Injectable()
export class ChildrenService {
  constructor(private _http: Http) { }

  getchildren() {
    return this._http.get('http://trackapi.gear.host/api/child');
  }
  getchildrenDetails(id: number) {
    return this._http.get('http://trackapi.gear.host/api/child/' + id);

  }



  getRecentLocation(id: number) {
    return this._http.get('http://trackapi.gear.host/api/child/' + id);
  }



  getchilds(id: number) {
    return this._http.get('http://trackapi.gear.host/api/parent/' + id);
  }

  addHistory(body: IHistory): Observable<IHistory> {
    let bodyString = JSON.stringify(body); // Stringify payload
    let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
    return this._http.post(`http://trackapi.gear.host/api/histories`, bodyString, { headers: headers })
      .map((res: Response) => {
        console.log("Response From Api: " + res.json());
        return res.json();
      })
  }

    getHistoryByCId(key:number): Observable<IHistory[]> {
        return this._http.get(`http://trackapi.gear.host/api/histories/${key}`)
            .map((res: Response) => {
                return res.json();
            })
    }

}




