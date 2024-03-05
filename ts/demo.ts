let a: number = 20;
let rno;
let k:number|string|boolean="raj"
console.log(typeof a, typeof rno, typeof k)
k = 25;

console.log(typeof k)
let q:any = 55
q = "prasad"
q = true;
let arr: number[] = [ 25, 55, 99, 74 ];
let arr2: string[] = [ "raj", "ravi", "shekhar" ]
    //
let arr3: (number | string)[] = [ "raj", 25, 63, "prasad" ];
let arr4: [ number, string, number ] = [ 55, "", 55 ];
const sum=(a: number, b: number,c:number=5):void=>
{
    console.log(a + b+c)
  
}
sum(2, 5)


//enum

enum days{
    sunday,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday
}
console.log(days.friday)
console.log(days[ days.sunday ])

function dummy():never {
    throw Error
}
// create a object with name, email, phone number with its respective interface
interface myObj {
	name: string
    email: string
    phno?:number
}
interface myObj2 extends myObj{
    salary:number
}
class Employee implements myObj2{
    readonly name;  salary; email; 
    constructor(n:string, s:number, p:string)
    {
        this.name = n;
        this.salary = s;
        this.email=p
    }
}
let xyz = new Employee("raj", 25252, "a@a.com")

let obj:myObj2 = {
    name: "prasad",
    email: "a@a.com",
    salary:555
}

type x = number | string | boolean
let a1: x = 23
type myObj3 = {
    name: string,
    email: string,
    salary:number
}
let obj5: myObj3 = {
    name: "xcvbnx",
    salary: 555,
    email:"ksghxgb"
}
type commonFun= (p:number,q:number)=>number
let sum2:commonFun = (a, b) => a + b
let sub2:commonFun = (a, b)=> a - b
let mul2 = (a: number, b: number): number => a * b
let div2 = (a: number, b: number): number => a / b
// sum2("bvcbn",23)
function clicky(e: Event) {
    console.log(e)
    const btn = e.target as HTMLButtonElement
    console.log(btn.textContent)
}

function sum3<T>(x:T, y:T)
{
   console.log(typeof x,typeof y)
}
sum3<number>(2,3)
sum3<string>("hi", "raj")

export namespace myFun{
     export function sum3(a:number) {
        return a++
    }
}
console.log(myFun)


















