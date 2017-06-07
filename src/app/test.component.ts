import { Component } from '@angular/core';
@Component({
     selector:'mytest',
     template:`<form action="/action_page.php">
  User Name: <input type="text" name="fname"><br>
  Password: <input type="text" name="lname"><br>
  <input type="submit" value="Login">
</form>`,
     styles:['p{color:red}']
})

export class  test{


}