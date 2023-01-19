
export class Expense {
  public id: number;
  public name: string;
  public category: string;
  public amount: number;
  public description: string;
  public date: Date;
  public userId:string;

  constructor(id:number,name:string,category:string,amount:number,description:string,date:Date,userId:string)
  {
    this.id=id;
    this.name=name;
    this.category=category;
    this.amount=amount;
    this.date= date;
    this.description=description;
    this.userId=userId;
  }
 }
