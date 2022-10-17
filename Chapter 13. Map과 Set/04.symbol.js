// Symbol : 유일한 key를 생성

const map = new Map();

const key1 = 'key';
const key2 = 'key';
map.set(key1, 'Hello');
console.log(map.get(key2)); // Hello
console.log(key1 === key2); // true

const symbolKey1 = Symbol('key'); // 내부적으로 가진 값은 같아도 무조건 다른 Symbol을 반환함이 보장됨
const symbolKey2 = Symbol('key');
map.set(symbolKey1, 'Bye');
console.log(map.get(symbolKey2)); // undefined
console.log(symbolKey1 === symbolKey2); // false

// 동일한 이름으로 하나의 key를 사용하고 싶다면 Symbol.for 사용
// 전역 심벌 레지스트리(Global Symbol Registry)
const k1 = Symbol.for('key');
const k2 = Symbol.for('key');
map.set(k1, 'Ohayo');
console.log(map.get(k2));
console.log(k1 === k2); // true

console.log(Symbol.keyFor(k1)); // 심볼 레지스트리에 저장된 Symbol을 가져옴
console.log(Symbol.keyFor(symbolKey1)); // 심볼 레지스트리에 저장되지 않은 Symbol은 가져올 수 없음

const obj = {[k1]: 'Hello', [Symbol('key')]: 1}; // 특정 필드에 접근을 못 하게 막아 놓기
console.log(obj);
console.log(obj[k1]); // 심볼을 통해 접근
console.log(obj[Symbol('key')]); // 동일한 symbol이 없으므로 접근 불가
