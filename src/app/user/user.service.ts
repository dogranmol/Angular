import { Injectable } from '@angular/core';
import { User } from './user.model';
import {BehaviorSubject} from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users : User[]=[];
  isLoggedIn:boolean=false;
  
  loginChange = new BehaviorSubject(this.isLoggedIn);

  constructor() { 
    if(localStorage.getItem('email'))
    {
        this.isLoggedIn=true;
        this.loginChange.next(true);
    }
    else
    {
        this.isLoggedIn=false;
        this.loginChange.next(false);
    }
  }

  authLogin(email:string,password:string):boolean{
      
    
    for(var i=0;i<this.users.length;i++)
    {
      
      if(this.users[i].email==email && this.users[i].password==password)
      {
        this.isLoggedIn=true;
        this.loginChange.next(true);
        return true;
      }
        
    }

    return false;
      
  }

  signIn(name:string,email:string,monthlyIncome:number,password:string){
    let id:number = this.users.length;
    
    this.users.push({id,name,email,password,monthlyIncome});
    
  }
  logout(){
    this.loginChange.next(false);
    localStorage.clear();
  }
}
