import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('f', { static: false }) signupForm: NgForm;

  constructor(private userService:UserService,private router:Router){ }

  email:string;
  password:string;

  onSubmit()
  {
    this.email = this.signupForm.value.email;
    this.password = this.signupForm.value.password;
    
    
      if(this.userService.authLogin(this.email,this.password))
      {
          localStorage.setItem('email',this.email);

          this.router.navigate(['/home']);
      }
      else
      {
          alert("Invalid Credintials!!!")
          this.signupForm.reset();
      }
  }
}
