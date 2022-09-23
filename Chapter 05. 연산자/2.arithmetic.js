// 산술연산자(Arithmetic operator)
// +
// -
// *
// / 나누기
// % 나머지
// ** 지수 (거듭제곱)
console.log(5 + 2); // 7
console.log(5 - 2); // 3
console.log(5 * 2); // 10
console.log(5 / 2); // 2.5
console.log(5 ** 2); // 25 (ES7) == Math.pow(5,2)
console.log(Math.floor(5 / 2));

// + 연산자 주의점
let text = '두개의 ' + '문자를';
console.log(text); // '두개의 문자를'
text = '1' + 1
console.log(typeof text) // 숫자와 문자열을 더하면 문자열로 변환됨에 주의
