//how to initialize object value?-by using constructor
class Account{
    acc_id;
    acc_name;
    acc_bal;
    constructor(id,name,bal){
        this.acc_id=id;
        this.acc_name=name;
        this.acc_bal=bal;
    }
    deposit_Amount(amount){
        this.acc_bal=this.acc_bal+amount
    }
    withdrwal(amount){
        this.acc_bal=this.acc_bal-amount
    }
    get_bal(){
        return this.acc_bal - 500;
    }
}
let a1=new Account(101,"balu",90000)
a1.deposit_Amount(1000)
let a2=new Account(102,"rittu",25000)
a2.withdrwal(2500)
console.log(a1);
console.log(a2);
console.log(a1.get_bal());
console.log(a2.get_bal());



