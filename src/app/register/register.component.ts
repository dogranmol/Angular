import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private userService:UserService,private router:Router){}
  @ViewChild('f', { static: false }) signupForm: NgForm;

  onSubmit(){
      this.userService.signIn(this.signupForm.value.name,this.signupForm.value.email,this.signupForm.value.income,this.signupForm.value.password);

      alert("registration success!!!");

      this.router.navigate(['/']);
  }
}
