import { Component, OnInit } from '@angular/core';
import { ChildinfoService, Ichildinfo } from "app/child-info/childinfo.service";

@Component({
  selector: 'app-child-info',
  templateUrl: './child-info.component.html',
  styleUrls: ['./child-info.component.css']
})
export class ChildInfoComponent implements OnInit {
childinfo:Ichildinfo[]=[];
  constructor(private cs:ChildinfoService) { 

  }

  ngOnInit() {}
  

  recentLoc(id){

    this.cs.recentLocation(id);
    console.log(res=>this.childinfo= res.json());
  }



}
