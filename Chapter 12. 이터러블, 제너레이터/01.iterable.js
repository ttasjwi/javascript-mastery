/**
 * Iterable : 반복 가능한 것들의 표준 인터페이스
 * - 예) String, Array, Map, Set
 * - [Symbol.iterator](): Iterator;
 * - 심볼 정의를 가진 객체나 특정한 함수가 Iterator를 return하면 iterable 인터페이스를 구현한 것(순회 가능한 객체)이 된다.
 * - Iterable은 순회가 가능하므로, for ... of  또는 spread 를 사용 가능하다.
 */

const array = [1,2,3]; // 배열은 순회 가능하다. (Iterable)
for (const item of array) {
    console.log(item);
}
console.log();

for (const item of array.keys()) { // 배열.keys() : 인덱스 Iterator
    console.log(item);
}
console.log();

for (const item of array.values()) { // 배열.values() : 저장값 Iterator
    console.log(item);
}
console.log();


const obj = {0:1, 1:2, };

// 참고 : for in 연산자는 객체의 key를 순회한다.
for (const item in obj) {
    console.log(item);
}
console.log();

let iterator = array.values();
console.log(iterator.next()); // 다음 결과 객체를 리턴 { value: 1, done: false }
console.log(iterator.next().value); // 2
console.log(iterator.next().value);
console.log(iterator.next().value); // undefined;
console.log(iterator.next().done); // done : 완료 상태


iterator = array.values();

while(true) {
    const item = iterator.next();
    if (item.done) break;
    console.log(item.value);
}
