
// 래퍼 객체 (Wrapper Object)
// 원시값을 필요에 따라서, 관련된 빌트인 객체로 변환한다.
// 필요하지 않으면 다시 원시값으로 되돌려줌

const number = 123; // number primitive type
console.log(number.toString()); // number primitive type을 감싸고 있는 Number 클래스 객체로 감싸짐
console.log(number); // number primitive type

const text = 'text'; // String 문자열(원시타입)
console.log(text);
console.log(text.length); // String 객체
text.trim(); // String 객체
