import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  isLoggedIn:boolean = false;
  
  constructor(private router:Router,private userService:UserService){
    userService.loginChange.subscribe((nextValue) => {
     this.isLoggedIn = nextValue;
   });
  }

  

  ngOnInit(): void {
    
  }

  logout(){
    this.userService.logout();
    this.router.navigate(['/']);
  }
}
