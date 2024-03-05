"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myFun = void 0;
var a = 20;
var rno;
var k = "raj";
console.log(typeof a, typeof rno, typeof k);
k = 25;
console.log(typeof k);
var q = 55;
q = "prasad";
q = true;
var arr = [25, 55, 99, 74];
var arr2 = ["raj", "ravi", "shekhar"];
//
var arr3 = ["raj", 25, 63, "prasad"];
var arr4 = [55, "", 55];
var sum = function (a, b, c) {
    if (c === void 0) { c = 5; }
    console.log(a + b + c);
};
sum(2, 5);
//enum
var days;
(function (days) {
    days[days["sunday"] = 0] = "sunday";
    days[days["monday"] = 1] = "monday";
    days[days["tuesday"] = 2] = "tuesday";
    days[days["wednesday"] = 3] = "wednesday";
    days[days["thursday"] = 4] = "thursday";
    days[days["friday"] = 5] = "friday";
    days[days["saturday"] = 6] = "saturday";
})(days || (days = {}));
console.log(days.friday);
console.log(days[days.sunday]);
function dummy() {
    throw Error;
}
var Employee = /** @class */ (function () {
    function Employee(n, s, p) {
        this.name = n;
        this.salary = s;
        this.email = p;
    }
    return Employee;
}());
var xyz = new Employee("raj", 25252, "a@a.com");
var obj = {
    name: "prasad",
    email: "a@a.com",
    salary: 555
};
var a1 = 23;
var obj5 = {
    name: "xcvbnx",
    salary: 555,
    email: "ksghxgb"
};
var sum2 = function (a, b) { return a + b; };
var sub2 = function (a, b) { return a - b; };
var mul2 = function (a, b) { return a * b; };
var div2 = function (a, b) { return a / b; };
// sum2("bvcbn",23)
function clicky(e) {
    console.log(e);
    var btn = e.target;
    console.log(btn.textContent);
}
function sum3(x, y) {
    console.log(typeof x, typeof y);
}
sum3(2, 3);
sum3("hi", "raj");
var myFun;
(function (myFun) {
    function sum3(a) {
        return a++;
    }
    myFun.sum3 = sum3;
})(myFun || (exports.myFun = myFun = {}));
console.log(myFun);
