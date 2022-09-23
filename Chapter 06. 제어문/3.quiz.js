
// 퀴즈!
let num = 2;
// num의 숫자가 짝수이면 짝짝
// num의 숫자가 홀수이면 홀홀 출력

// 풀이1
if (num %2 === 0) {
    console.log('짝짝');
} else {
    console.log('홀홀');
}

let result = num %2 === 0
    ? '짝짝'
    : '홀홀';
console.log(result);
