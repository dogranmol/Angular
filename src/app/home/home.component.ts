import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Expense } from '../expense/expense.model';
import { ExpenseService } from '../expense/expense.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    constructor(private expenseService:ExpenseService){}
    expenses:Expense[];

    ngOnInit(): void {
      this.expenses = this.expenseService.getExpenses();
    }

    editExp(exp:Expense)
    {
      alert("edit "+JSON.stringify(exp));
    }
    deleteExp(exp:Expense)
    {
      var index:number=-1;
      for(var i=0;i<this.expenses.length;i++)
      {
        if(this.expenses[i].id==exp.id)
        {
          index = i;
          break;
        }
      }
      this.expenses.splice(index,1);
    }

    

    
}
