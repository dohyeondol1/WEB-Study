function sum(num1, num2){
  return num1 + num2;
}

const sum = (num1, num2) => {
  return num1 + num2;
}  //둘 다 같은 의미를 가지고 있는 함수



const sum = (num1, num2) => num1 + num2; //간단하게 표현 가능

const result = sum(20,20);
console.log(result);



const pow = x => x * x: any //매개변수가 한개인 경우

const result = pow(10);
console.log(result);



const printPie = () => 3.14; //매개변수가 없는 함수

const result = printPie();
console.log(result);



const getObject = () => ({ //간단하게 줄일때 return 값을 소괄호로 감싸야함
  name:"철수",
  age:20
});

const obj = getObject();
console.log(obj.name);


/*
function outer(x){
  return function inner(){
    return x*x;
  }
}
↓ 이렇게 바꿀 수 있음*/
const outer = (x) => () => x * x;

const innerFuc = outer(10);
const result = innerFuc();
console.log(result);
