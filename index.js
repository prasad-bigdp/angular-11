console.log(k)
function x ()
{
    var a = 20;
    if (true)
    {
        let b = 15;
        console.log(a,b)
    }

}
var k=20;
x()
//callback
function y (a, x)
{
    console.log(a, x)
    return x
}
y(5, x)
//Data types
//operator ?:,++,--
//loops,control statements
arr=[2,3,5,8,7,9]
for (let i = 0; i < arr.length; i++)
{
    console.log(arr[i])
}
for (let i of arr)
{
    console.log(i)
    }
for (let i in arr)
{
    console.log(arr[i])
}
arr.forEach((i) => console.log(i))
const p = arr.map((i) =>
{
    console.log(i)
    return i%2==0
})
const q = arr.filter((i) => {
	console.log(i)
	return i%2==0
})
console.log(p, q)

//lexical scoping
let obj = {
    name: "raj",
    age: 20,
 
}
function print (a,b)
    {
        console.log(this.name,this.age,a,b)
    }
print.call(obj,5,6)
print.apply(obj,[5,6])
let r = print.bind(obj)
console.log(r)
r()


//events
//xmlHttpRequest
//fetch

//https://dummyjson.com/products
fetch("https://dummyjson.com/recipes")
    .then((res) => res.json())
    .then((data) => console.log(data))
    
async function fetchData ()
{
    const res = await fetch("https://dummyjson.com/recipes")
    const data = await res.json()
    console.log(data)
}   
fetchData() 
//promises,await-async
//classes
class Iphone
{
    name;
    constructor(name)
    {
        this.name = name;
    }
    print ()
    {
        console.log(this.name)
    }
}
class Iphone2 extends Iphone
{
    constructor(name)
    {
        super(name)
    }
}
export default Iphone
export {Iphone2}












//modules















