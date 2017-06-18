import { Component, OnInit } from '@angular/core';
import { ChildinfoService } from "app/child-info/childinfo.service";
import { ActivatedRoute } from "@angular/router";
import { ChildrenService, Ichildinfo, IHistory } from "app/children/children.service";
// import * as io from 'socket.io-client';
// import * as _ from 'lodash';
import {Socket} from 'ng2-socket-io';
@Component({
  selector: 'app-child-info',
  templateUrl: './child-info.component.html',
  styleUrls: ['./child-info.component.css']
})
export class ChildInfoComponent implements OnInit {
historyObj: IHistory = {
    serviceProvider: "",
    debug: true,
    time: 0,
    accuracy: 0,
    speed: 0,
    longitude: 0,
    latitude: 0,
    altitude: 0,
    altitudeAccuracy: 0,
    bearing: 0,
    timestamp: 0,
    child_Id: 0,
    coords: {
      latitude: 0,
      longitude: 0,
      altitude: 0,
      speed: 0,
      accuracy: 0,
      altitudeAccuracy: 0,
      heading: 0
    },
    viewFlag: true,
  }
  recentloc: any[] = [];
  date: Date;
  zoom: number = 18;

  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;
  locationFlag: any;
  speed: number = 0;
  childObj: any = {};
  selectedParent: any = {};
  // socket: any;
  constructor(private route: ActivatedRoute, private cs: ChildrenService,private socket:Socket) {

  }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    this.date = new Date();
    console.log(this.date.toJSON().toUpperCase());
    this.cs.getchildrenDetails(id).subscribe(res => {
      this.childObj = res.json();
      console.log("Child obj>>>>",this.childObj);
        this.socket.on('connect', () => {
      console.log("from parent app", this.childObj.parent_Id);
      //console.log("from parent app>>Obj", this.selectedParent);

      this.socket.emit('joinParent', this.childObj.parent_Id);
    })
    this.cs.getHistoryByCId(this.childObj.id).subscribe(data => {
        if (data) {
          let lastLoc = data[0];
          console.log("LastLocation>>>", lastLoc);
          if (lastLoc != undefined) {
            this.locationFlag = lastLoc;
            this.lat = lastLoc.latitude;
            this.lng = lastLoc.longitude;
            this.speed = lastLoc.speed ? lastLoc.speed * 3.6 : 0;
          }

        }
        
      })



});
    









    this.socket.on('message', location => {
      if (location) {
        console.log("message latitude>>>>", location.latitude)
        this.historyObj.child_Id = this.childObj.id;
        this.historyObj.longitude = location.longitude;
        this.historyObj.latitude = location.latitude;
        this.historyObj.speed = location.speed;
        this.historyObj.time = location.time;
        this.historyObj.serviceProvider = location.serviceProvider;
        this.historyObj.timestamp = location.timestamp;
        this.historyObj.viewFlag = true;
        this.cs.addHistory(this.historyObj).subscribe(data => {
          console.log(data);
        });

        this.locationFlag = location;
        this.lat = location.latitude;
        this.lng = location.longitude;
        this.speed = location.speed ? location.speed * 3.6 : 0
      }


    });


  }

}
