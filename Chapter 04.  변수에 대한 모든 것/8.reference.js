// 원시타입은 평가된 값이 전달됨
let a = 1;
let b = a;
console.log(a);
console.log(b);

b= 2;
console.log(a);
console.log(b);

// 객체 타입은 객체 참조(메모리 주소)가 복사되어 전달됨
let apple = { // 0x1234
    name: '사과'
};
let orange = apple;
console.log('apple =', apple);
console.log('orange =', orange);

orange.name = '오렌지';
console.log('apple =', apple);
console.log('orange =', orange);
