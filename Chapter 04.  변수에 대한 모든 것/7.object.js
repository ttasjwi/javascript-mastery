/**
 * 객체 (Object)
 * key, value를 {} 안에 여러개 복합적으로 보관
 * 상태, 행동 보관
 *
 * 실제 객체는 Heap에 할당됨
 * - 데이터 size가 정해지지 않고 동적으로 사이즈가 변하는 것들이 저장됨
 *
 * 변수에는 Heap에 있는 실제 객체의 참조(메모리 주소)가 할당됨
  */

let name = 'apple';
let color = 'red';
let price = 10000;

let orangeName = 'orange';
// ... 공통된 속성들을 추상화

let apple = {
    name: 'apple',
    color: 'red',
    price: 10000
};

console.log(apple);
console.log(apple.name);
console.log(apple.color);
console.log(apple.price);

let orange = {
    name: '오렌지',
    color: 'orange',
    price: 20000,
};
console.log(orange);
console.log(orange.name);
console.log(orange.color);
console.log(orange.price);
