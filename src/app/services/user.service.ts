import { Injectable } from '@angular/core';
import { User } from 'src/model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user1:User;
  userList:User[]=[];

  constructor() {
    this.user1=new User(1001,"sai@gmail.com","1234");
    this.userList.push(this.user1);
    this.user1=new User(1002,"sumanth@gmail.com","1234");
    this.userList.push(this.user1);
   }
   
  validateUser(userParam:User):boolean{
    this.userList.forEach(p=>{
      if(p.emailid===userParam.emailid && p.password===userParam.password)
        return true;
    })
    return false;
  }
}
