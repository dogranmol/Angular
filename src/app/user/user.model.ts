export class User{
    public id:number;
    public name: string;
    public email: string;
    public password: string;
    public monthlyIncome: number;
  
    constructor(id:number,name: string,email: string,password: string,monthlyIncome: number) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.password = password;
      this.monthlyIncome = monthlyIncome;
    }
}