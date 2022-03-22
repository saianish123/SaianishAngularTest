export class User{
    validateUser(user: User) {
      throw new Error('Method not implemented.');
    }
    constructor(public id:number=0,public emailid:string="",public password:string=""){
        
    }
}