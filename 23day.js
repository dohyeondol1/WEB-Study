let student1 = {
  koreanScore : 90, 
  "englishScore": 80, //문자열로 작성 시 띄어쓰기 가능, 점 연산자로는 접근 불가능
  mathScore : 70,
  scienceScore : 60
}; 

//대괄호 연산자
console.log(student1["koreanScore"]);
//점 연산자
console.log(student1.mathScore);
