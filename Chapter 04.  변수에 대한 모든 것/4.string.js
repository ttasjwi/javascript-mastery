/**
 * 문자열 타입(String)
 * MDN String : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String
 */

let string = '안녕하세요'; // SingleQuote, DoubleQuote, Back tick;
string = `안녕!`;
console.log(string);

// 특수 문자 출력하는 법
string = `"안녕!"`;
console.log(string);
string = '\'안녕\''; // 이스케이프 문자
console.log(string);

string = '안녕!\n 땃쥐야!\t\t내 이름은\\\u09AC';
console.log(string);

// 템플릿 리터럴(Template Literal)
let id = '땃쥐';
let greetings = "'안녕!, "+ id + "야! \n즐거운 하루 보내요!'";
console.log(greetings);

greetings = `안녕!, ${id}야!
즐거운 하루 보내요!'`;
console.log(greetings);
