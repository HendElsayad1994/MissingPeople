import { Component, OnInit } from '@angular/core';
import { ChildrenService, IChildren, Ichildinfo, IParent } from "app/children/children.service";

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {
children:IChildren[]=[];
parent:IParent[]=[];
childs:IChildren[]=[];
selectedChild:Ichildinfo=null;

  constructor(private cs:ChildrenService) {

   }

  ngOnInit() {
    this.cs.getchildren().subscribe(res=>this.children=res.json());
  }
 
getchilds(id:number)
{
    this.cs.getchilds(id).subscribe(res=>this.parent=res.json());
    console.log(this.parent);
    //this.childs=this.parent.find(o=>o.);


}

}
