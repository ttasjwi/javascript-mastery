/**
 * 불리언 타입
 * MDN Boolean : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Boolean
 * !! 연산자 : 값을 True, False로 변환
 */
let 참 = true;
let 거짓 = false;
console.log(참);
console.log(거짓);

// 활용례
let isFree = true;
let isActivated = false;
let isEnrolled = true;
console.log(isActivated);

console.clear();
// Falshy 거짓인 값 : 값이 없거나 텅빈 문자열, ...
console.log(!!0); // !!연산자 : 값을 부울로 변환
console.log(!!-0);
console.log(!!'');
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

//  Truthy 참인 값
console.log(!!1);
console.log(!!-1);
console.log(!!'text');
console.log(!!{}); // 텅빈 오브젝트
console.log(!!Infinity);
