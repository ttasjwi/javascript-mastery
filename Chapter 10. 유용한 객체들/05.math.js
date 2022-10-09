// Math : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
// static properties, method

console.log(Math.E); // 자연상수
console.log(Math.PI); // 원주율

// static method
console.log(Math.abs(-10)); // 절댓값
console.log(Math.ceil(1.4)); // 소숫점 이하를 올림
console.log(Math.abs(1.4)); // 소숫점 이하를 버림
console.log(Math.round(1.4)); // 소숫점 이하를 반올림

// 정수만
console.log(Math.trunc(1.5432)); // 정수만 반환
console.log(Math.trunc(-1.5432)); // 정수만 반환

// 최대 최소
console.log(Math.max(1,3,4)); // 최대
console.log(Math.min(1,3,4)); // 최소

// 거듭제곱
console.log(3 ** 2);
console.log(Math.pow(3,2));

// 제곱근
console.log(Math.sqrt(9));

// 랜덤한 값 반환
console.log(Math.random()); // 0이상 1 미만
console.log(Math.floor(Math.random() * 10) + 1) // 1이상 11미만
