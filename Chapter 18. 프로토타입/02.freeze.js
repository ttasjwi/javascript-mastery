// 동결 : Object.freeze
// 객체의 프로퍼티 추가, 삭제 불가, 쓰기 x , 속성 재정의 불가
// (단, 얕은 꽁꽁 얼림!)
const ttasjwi = {name: '땃쥐'};
const dog = {name: '와우', emoji:'🐶', owner: ttasjwi};
console.log(dog);

Object.freeze(dog); // 객체를 동결
dog.name = '멍멍';
console.log(dog);

dog.age = 20; // 새로운 프로퍼티 추가 시도
console.log(dog.age); // undefined
console.log(dog);
delete dog.name;
console.log(dog.name);

ttasjwi.name = '불꽃땃쥐';
console.log(dog); // 내부 객체의 상태 불변을 보장하지 못 함

// 밀봉 : Object.seal
// 값의 수정 허용, 키 추가 불가, 키 삭제 불가, 속성 재정의 불가
const cat = {... dog};
// Object.assign(cat, dog);
console.log(cat);
Object.seal(cat);
cat.name = '냐옹'; // 프로퍼티 변경
console.log(cat);
delete cat.emoji;
console.log(cat); // emoji 삭제 안 됨

console.log(Object.isFrozen(dog));// 객체가 동결되었니
console.log(Object.isSealed(cat)); // 객체가 Seal 되었니

// 확장 금지 : preventExtensions
// 속성 추가 불가능
const tiger = {name: '어흥'};
Object.preventExtensions(tiger); // 확장 금지
console.log(Object.isExtensible(tiger)); // 확장 가능 여부
tiger.name = '어흐응';
console.log(tiger); // 속성 변경 가능
delete tiger.name;
console.log(tiger); // 속성 삭제 가능
tiger.age = 1;
console.log(tiger); // 속성 추가 불가능.
