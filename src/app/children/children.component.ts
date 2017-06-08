import { Component, OnInit } from '@angular/core';
import { ChildrenService, IChildren, Ichildinfo } from "app/children/children.service";

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {
children:IChildren[]=[];
selectedChild:Ichildinfo=null;

  constructor(private cs:ChildrenService) {

   }

  ngOnInit() {
    this.cs.getchildren().subscribe(res=>this.children=res.json());
  }
 

}
