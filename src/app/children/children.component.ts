import { OnInit, Component } from '@angular/core';
import { ChildrenService, IChildren, Ichildinfo, IParent } from "app/children/children.service";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit{
  /* ngOnDestroy(): void {
      throw new Error('Method not implemented.');
    }*/

    route: any;
children:IChildren[]=[];
 parent: Array<any> =[];
childs:IChildren[]=[];
selectedChild:Ichildinfo=null;

  constructor(private activatedRoute: ActivatedRoute,private cs:ChildrenService) {

   }

  ngOnInit() {
 this.activatedRoute.params.subscribe((params: Params) => {
        let userId = params['id'];
        console.log(userId);
        this.cs.getchilds(userId).subscribe(res=>{
           this.parent=res.json();
      console.log(this.parent);
     // this.parent.find(a=>a.f);
      //this.childs=this.parent.find(a=>a.);
        });

      });



    /* let id =+this.route.snapshot.params['id'];
     console.log(id);
      this.cs.getchilds(id).subscribe(res=>this.parent=res.json());
      console.log(this.parent);*/



   // this.cs.getchildren().subscribe(res=>this.children=res.json());
  }
 
/*getchilds(id:number)
{
    this.cs.getchilds(id).subscribe(res=>this.parent=res.json());
    console.log(this.parent);
    //this.childs=this.parent.find(o=>o.);


}*/

}
