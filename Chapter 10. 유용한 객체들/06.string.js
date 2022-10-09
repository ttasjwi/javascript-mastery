const textObj = new String('Hello World'); // 객체
const text = 'Hello World'; // 문자열

console.log(textObj);
console.log(text);
console.log(text.length); // 길이

console.log(text[0]) // 인덱스로 접근
console.log(text[1]);
console.log(text[2]);
console.log(text.charAt(0));
console.log(text.charAt(1));
console.log(text.charAt(2));

console.log(text.indexOf('l')); // 앞에서부터 인덱스 찾기
console.log(text.lastIndexOf('l')); // 뒤에서부터 인덱스 찾기
console.log(text.indexOf('x')); // 없으면 -1

console.log(text.includes('tx')); // 있니?
console.log(text.includes('h')); // 대소문자 구분해서 판단
console.log(text.includes('H')); // 대소문자 구분해서 판단

console.log(text.startsWith('He')); // ~로 시작하니
console.log(text.endsWith('ld')); // ~로 끝나니

console.log(text.toUpperCase()); // 대문자화
console.log(text.toLowerCase()); // 소문자화

console.log(text.substring(0,2)); // 0, 1
console.log(text.slice(2)); // [2:]
console.log(text.slice(-2)); //[-2:] 맨뒤 2번째부터

const space = '              space              ';
console.log(space.trim()); // 양 옆 공백 제거

const longText = 'Get to the point';
console.log(longText.split(' ')); // 공백문자로 끊어서 배열로 반환
console.log(longText.split(' ', 2)); // 끊어서 앞의 2개만
