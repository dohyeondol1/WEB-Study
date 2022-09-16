let integer = 10;     //10진수
let hex = 0xa;        //16진수
let binary = 0b1010;  //2진수
let octal 0o12;       //8진수

console.log(integer, hex, binary, octal);

let negetive = -10    //음의 정수
let indices  = 1.0e1  //지수
let double   = 10.12  //소수

console.log(negative, double, indices);

let IsInfinity = 10 / 0;    //무한대
let IsNaN      = 10 / "일"; //Not a Number

console.log(IsInfinity, IsNaN);

let sum = 0.1 + 0.2; //숫자를 2진수로 변환할때 0.1은 순환소수로 변환되기 때문에
console.log(sum);    //0.30000000000000004 와 같이 0.3의 근사값이 나옴
