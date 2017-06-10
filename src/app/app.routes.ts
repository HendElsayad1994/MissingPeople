import{Routes} from "@angular/router";
import{ChildInfoComponent} from "app/child-info/child-info.component";
import{ChildrenComponent} from "app/children/children.component";
import{LoginComponent} from "app/login/login.component";


export const App_Routes:Routes=[

    {path:"Login",component:LoginComponent},
    {path:"Login/:id",component:ChildrenComponent},
    {path:"children" ,component:ChildrenComponent},
   {path:"children/:id",component:ChildInfoComponent},
    {path:"child-info/:id",component:ChildInfoComponent},
    
    {path:"**" ,component:LoginComponent},
    //gmvm,b,hbj

    
]