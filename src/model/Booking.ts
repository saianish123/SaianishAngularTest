import { Room } from "./Room";
import { User } from "./User";

export class Booking{
    constructor(public id:number,
        public room:Room=new Room(),
        public user:User=new User(),
        public purpose:string="",
        public participants:number){
    }
}