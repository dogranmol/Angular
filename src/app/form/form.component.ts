import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ExpenseService } from '../expense/expense.service';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @ViewChild('f', { static: false }) signupForm: NgForm;
  constructor(private expService:ExpenseService,private router:Router){}
  onSubmit(){
      this.expService.addExpense(this.signupForm.value.name,this.signupForm.value.amount,this.signupForm.value.category,this.signupForm.value.description);
     
      this.router.navigate(['/home']);
  }
}
