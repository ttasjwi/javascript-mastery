// 스코프 : 변수를 참조할 수 있는 유효 범위
// 식별자가 유효한 범위
//
// - 블록 안의 변수 : 블록안에서만 유효
// - {}, 제어문 블록(if, for, while, ...) , 함수, ...
// - 블럭내 변수는 외부에서 참조 불가
// - 이름 충돌 방지
//

{
    const a = 'hello';
    console.log(a);
}
// console.log(a);// ReferenceError: a is not defined


const b = 'jello';

{
    console.log(b); // 내부 블록에서는 외부 블록의 변수에 접근할 수 있다.
}
console.log();

function print() {
    const message = 'Hello';
    console.log(message)
    console.log(b); // 내부 블록에서는 외부 블록의 변수에 접근할 수 있다.
}

print();
// console.log(message); // ReferenceError: a is not defined

function sum(num1, num2) { // 함수의 매개변수의 스코프는 블록 안이므로 역시 외부 블록에서 접근할 수 없다.
    console.log(num1, num2);
    return a+b;
}

// console.log(num1, num2); // ReferenceError: a is not defined
