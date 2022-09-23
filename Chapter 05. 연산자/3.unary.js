// 단항 연산자 Unary Operators
// + (양)
// - (음)
// !(부정)
// !!(boolean 타입으로 변환)

let a = 5;

a = -a; // -1 * a
console.log(a);

a = -a; // -1 * a
console.log(a); // - 숫자 == - 1 * 숫자

a = +a;
console.log(a); // 부호 그대로

a = -a;
a = +a;
console.log(a); // 부호 그대로

let boolean = true;
console.log(boolean); // true
console.log(!boolean); // false
console.log(!!boolean); // true

// + :  숫자가 아닌 타입을 숫자로 변환하면 어떤 값이 나오는 지 확인할 수 있음?
console.clear()
console.log(+false);
console.log(+null);
console.log(+'');
console.log(+true);
console.log(+'test'); // 문자열은 숫자로 변환할 수 없음
console.log(+undefined); // undefined는 숫자로 변환할 수 없음

console.log(!!1); // ! 은 부정연산자이고, !!은 값을 boolean 타입으로 변환함!
