//var : 중복선언 가능
var num1 = 10;
console.log(num1); // 변수 선언

//let : 중복선언 불가
let num2 = 10;
console.log(num2); // 변수 선언

const num3 = 10;
console.log(num3);  //상수 선언

//1.변수 이름은 카멜케이스 방법으로 작성
let userName = "dohyeondol" // (o)
let user_name = "dohyeondol" // (x)

//2.변수 이름은 _, $, 문자로만 시작
let 14day = "화요일"; // (x) 숫자
let @day14 = "화요일";// (x) _, $ 이외의 특수문자

let day14 = "화요일";// 문자
let _day14 = "화요일";// _
let $day14 = "화요일";// $

//3. 상수나 축약어는 대문자와 스네이크케이스 방식으로 작성
const HTML = "Hyper Text Markup Language";
const MAX_LEVEL = "99";

//4. 예약어는 사용할 수 없음 ex) var, let, const, typeof 등등...
const var = 10; //(x) var는 변수 선언 키워드로 변수 이름으로 지을 수 없음
