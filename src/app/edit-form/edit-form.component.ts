import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Expense } from '../expense/expense.model';
import { ExpenseService } from '../expense/expense.service';
import { NgbAlertModule, NgbDatepickerModule, NgbDateStruct,NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit{

  @ViewChild('f', { static: false }) signupForm: NgForm;
  expense:Expense;
  
  constructor(private route: ActivatedRoute,private router:Router,private expenseService:ExpenseService) { }
   

  ngOnInit() {

    var id = this.route.snapshot.params['id'];
    this.expense=this.expenseService.getById(id);
    
  }
  onSubmit(){
    this.expense.name=this.signupForm.value.name;
    this.expense.description=this.signupForm.value.description;
    this.expense.category=this.signupForm.value.category;
    this.expense.amount=this.signupForm.value.amount;
   
    this.expenseService.update(this.expense);
    
    this.router.navigate(['/home']);
  }
}
