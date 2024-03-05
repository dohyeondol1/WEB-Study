/*
function sum(number1, number2){
  console.log(number1 + number2);
}

sum(10,20);
*/

function sum(number1, number2){
  return number1 + number2;
}

const sum_result_1 = sum(10,20); // 30 반환
const sum_result_2 = sum(20,30); // 50 반환

const sum_result = sum_result_1 + sum_result_2;
console.log('총 합은 ' + sum_result + "입니다,"); 

/*
function printReturn(){
  console.log('return 실행 전');
  return;
  console.log('return 실행 후');
}

printReturn();
*/
