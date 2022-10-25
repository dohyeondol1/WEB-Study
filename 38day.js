//백틱 (`) 을 사용하여 문자열을 표현
let name1 = '철수';
let name2 = '영희';

let str1 = "I'm Fine Thank You!"; //작은 따옴표가 들어간 문자열
console.log(str1);

let str2 = '"시작이 반이다"'; //큰 따옴표가 들어간 문자열
console.log(str2);

let str3 = '"여러분, ' + "'시작이 반이다.'라는 말 " + '들어보셨죠?"';; //문자열 더하기
console.log(str3);

let str4 = "\"여러분, '시작이 반이다.'라는 말 들어보셨죠?\""; //역슬래쉬
console.log(str4);

let str5 = `"여러분, '시작이 반이다.'라는 말 들어보셨죠?"`; //백틱
console.log(str5);

let string = `$[name1]은 $[name2]를 좋아합니다.`; //템플릿 문자열
console.log(string);

//템플릿 문자열은 구버전 브라우저(IE)는 지원하지 않아서
//구버전 브라우저에서도 지원하게 하려면 바벨(babel)과 같은 모듈을 사용해야 함
