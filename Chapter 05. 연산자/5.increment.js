// 증가 & 감소 연산자 Increment & Decrement Operators

let a = 0;
console.log(a);

a++; // a = a + 1;
console.log(a);

a--; // a = a - 1;
console.log(a);
console.clear();

// 주의!
// a++ 필요한 연산을 하고, 그 뒤 값을 증가시킴
// ++a 값을 먼저 증가하고 필요한 연산을 함
a = 0;
let b = a++; // a를 참조하여 b에 할당하고, a를 증가시킴
console.log(b); // 증가시키기 전인 0이 할당되어 있음
console.log(a);

a = 0;
console.log(a++) // 0
console.log(a) // 1