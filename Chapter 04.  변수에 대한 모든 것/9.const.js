// let : 재할당 가능
let a = 1;
a = 2;

// const : 재할당 불가능
// 1. 상수
// 2. 상수 변수 또는 변수
const text = 'hello';
// text = 'ht'; // TypeError: Assignment to constant variable.

// 1. 상수
const MAX_FRUITS = 5;

// 2. 재할당 불가능한 상수 변수 또는 변수
const apple = {
    name: 'apple',
    color: 'red',
    price: 10000
};
console.log(apple);
// apple = {};


// 주의 : 재할당만 불가능하지, 객체의 내부 프로퍼티에서 할당하고 있는 변수는 변경 가능하다.
apple.name = 'orange';
console.log(apple);

apple.price = 20000;
console.log(apple);
