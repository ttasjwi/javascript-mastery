// 동등 비교 관계 연산자 (Equality operators)
// == : 값이 동등함
// != : 값이 다름
// === : 값, 타입이 둘 다 같음
// !== : 값과 타입이 다름

console.log(2 == 2);
console.log(2 != 2);
console.log(2 != 3);
console.log(2 == 3);
console.log(2 == '2'); // 타입은 다르지만...
console.log(2 === '2'); // 타입이 다름
console.log(true == 1); // 타입은 다르지만 값이 같음
console.log(false == 0);
console.log(true === 1);
console.log(false === 0);
console.clear();

const obj1 = { // 0x111
    name: 'js',
}

const obj2 = { // 0x112
    name: 'js',
}
console.log(obj1 == obj2); // 참조값이 다름
console.log(obj1 === obj2); // 값 자체가 다름.
console.log(obj1.name == obj2.name);
console.log(obj1.name === obj2.name);

let obj3 = obj2; // 동일한 메모리 주솟값을 저장함
console.log(obj3 == obj2);
console.log(obj3 === obj2);
