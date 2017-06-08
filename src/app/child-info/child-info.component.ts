import { Component, OnInit } from '@angular/core';
import { ChildinfoService, Ichildinfo } from "app/child-info/childinfo.service";
import { ActivatedRoute } from "@angular/router";
import { ChildrenService } from "app/children/children.service";

@Component({
  selector: 'app-child-info',
  templateUrl: './child-info.component.html',
  styleUrls: ['./child-info.component.css']
})
export class ChildInfoComponent implements OnInit {
childinfo:Ichildinfo[]=[];
  constructor(private route:ActivatedRoute,private cs:ChildrenService ) { 

  }

  ngOnInit() {
    let id =+this.route.snapshot.params['id'];
    this.cs.getchildrenDetails(id).subscribe(res=>this.childinfo=res.json())
  }

  

  /*recentLoc(id){

    this.cs.recentLocation(id);
    console.log(res=>this.childinfo= res.json());
  }
*/


}
