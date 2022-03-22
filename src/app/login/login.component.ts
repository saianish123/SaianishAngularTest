import { Component, Injector, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  user1:User=new User();
  loginOutputMessage="";

  

  
  constructor(private services:User,private router:Router) {
  }

  login(){
    if(this.User.validateUser(this.user1)){
      this.router.navigate(["booking"]);
      this.loginOutputMessage="Successfully logged in !!";
    }
    else{
    this.loginOutputMessage="Wrong credentials";
    }
  }

  ngOnInit() {
  }


}
