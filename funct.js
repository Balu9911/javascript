// function greet(){
//     console.log("good mrng");
//     console.log("good aftrn");
//     console.log("good nyt");
// }


// function add(a,b,c=1) {
//     console.log(a+b+c);
// }
// // add(10,20)//30
// // add(100,1)//101
// // add(100)//NaN
// // add(1,2,3)//3

// add(10,20,20)
// add(10,20)
// add(1,1,1)

// function add(a,b) {
//     let c=1
//     return a+b;
// }
// let r1=add(10,20)
// console.log(r1);
// let r2=add(1,2)
// console.log(r2);

function cal_age(year) {
    let cy=new Date().getFullYear();
    return cy-year
}
let age1=cal_age(1983)
console.log(age1);//41
let age2=cal_age(2002)
console.log(age2);//22

