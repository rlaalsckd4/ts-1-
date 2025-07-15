"use strict";
//string
const a = "";
const b = "";
const c = ``;
let myName = "Steve";
let message = `Hello ${myName}`;
myName.toLocaleLowerCase();
message = 1234; //메세지를 string타입으로 정의해 놓았기에 숫자가 왔을 때 에러가 뜸
//number
let n = 100;
n = "100";
n.toUpperCase(); // 문자열은 물론 문자열 메소드도 오면 안 됨
let count = 10;
let price = 9.99;
let temperature = -15;
let distance = 3.4e-5;
let total = count * price;
let average = total / 2;
let infinity = Infinity;
let minusInfinity = -Infinity;
let iAmNotANumber = NaN;
// boolean
let isOpen = true;
let isCompleted = false;
if (isOpen) {
    console.log("hello we are open!");
}
if (!isCompleted) {
    console.log("job mot complete");
}
// && || ! 논리 연산자와 함께 사용 가능하다
let isAvailable = isOpen && !isCompleted;
// null
let user = null;
function login(userName) {
    user = userName;
}
function Logout() {
    user = null;
}
login("Joey");
Logout();
// any
let someValue;
someValue.toString();
someValue = false;
someValue.toFixed();
// 아무 타입이나 올 수 있음, 안정성이 상당히 떨어짐
