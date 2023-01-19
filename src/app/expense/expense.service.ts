import { Injectable } from '@angular/core';
import { Expense } from './expense.model';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  
  private expenses:Expense[];
  private countOfElements;

  constructor() { 
    this.countOfElements=0;
    this.expenses = [];
  }

  addExpense(name:string,amount:number,category:string,description:string){
      const id:number = this.countOfElements;
      const date = new Date();
      const userId:string = localStorage.getItem('email');
      this.expenses.push({id,name,category,amount,date,description,userId});
      this.countOfElements++;
  }
  
  getExpenses(){
   
      return this.expenses.filter((element)=>{return (localStorage.getItem('email')==element.userId)});
  }
  getById(id):Expense{

    for(var i=0;i<this.expenses.length;i++)
    {
      if(this.expenses[i].id==id)
      {
        return this.expenses[i];
      }
    }
  }
  update(expense:Expense)
  {
    for(var i=0;i<this.expenses.length;i++)
    {
      if(this.expenses[i].id==expense.id)
      {
        this.expenses[i] = expense;
        return;
      }
    }
  }

  
}
