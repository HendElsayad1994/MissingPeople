import{Routes} from "@angular/router";
import{ChildInfoComponent} from "app/child-info/child-info.component";
import{ChildrenComponent} from "app/children/children.component";


export const App_Routes:Routes=[
    {path:"children/:id",component:ChildInfoComponent},
    {path:"**" ,component:ChildrenComponent}
    
]