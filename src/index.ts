//string

const a: string = "";
const b: string = "";
const c: string = ``;

let myName: string = "Steve";
let message: string = `Hello ${myName}`;

myName.toLocaleLowerCase();

message = 1234; //메세지를 string타입으로 정의해 놓았기에 숫자가 왔을 때 에러가 뜸

//number

let n: number = 100;

n = "100";
n.toUpperCase(); // 문자열은 물론 문자열 메소드도 오면 안 됨

let count: number = 10;
let price: number = 9.99;
let temperature: number = -15;
let distance: number = 3.4e-5;

let total: number = count * price;
let average: number = total / 2;

let infinity: number = Infinity;
let minusInfinity: number = -Infinity;
let iAmNotANumber: number = NaN;

// boolean

let isOpen: boolean = true;
let isCompleted: boolean = false;

if (isOpen) {
  console.log("hello we are open!");
}

if (!isCompleted) {
  console.log("job mot complete");
}

// && || ! 논리 연산자와 함께 사용 가능하다

let isAvailable: boolean = isOpen && !isCompleted;

// null

let user: string | null = null;

function login(userName: string) {
  user = userName;
}

function Logout() {
  user = null;
}

login("Joey");
Logout();

// any

let someValue: any;

someValue.toString();
someValue = false;
someValue.toFixed();

// 아무 타입이나 올 수 있음, 안정성이 상당히 떨어짐
