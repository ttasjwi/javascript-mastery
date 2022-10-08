// 글로벌하게 사용할 수 있는 속성, 함수

console.log(globalThis);
console.log();

console.log(this);
// node.js : 현재 모듈의 정보 출력. 전역 객체

console.log(Infinity);
console.log(NaN);
console.log(undefined);

eval('const num = 2; console.log(num);');
console.log(isFinite(1)); // true
console.log(isFinite(Infinity)); // false

console.log(parseFloat('12.43')); // 12.43
console.log(parseInt('12.43')); // 12
console.log(parseInt('11'));

// URL (URI, Uniform Resource Identifier 하위 개념)
// 아스키 문자로만 구성되어야함
// 한글이나 특수문자는 이스케이프 처리해야함
const URL = 'https://드림코딩.com';
const encoded = encodeURI(URL);
console.log(encoded);

const decoded = decodeURI(encoded);
console.log(decoded);

// 전체 URL이 아니라 부분적인 것은 Component 이용
const part = '드림코딩.com';
const encodedPart = encodeURIComponent(part);
console.log(encodedPart);
const decodedPart = decodeURIComponent(encodedPart);
console.log(decodedPart);
