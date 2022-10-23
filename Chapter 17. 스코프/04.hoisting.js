print();

/**
 * 함수의 호이스팅
 *  - 함수 선언문이 블록 맨 위로 끌어올려지는 것처럼 보이는 현상(호이스팅)
 *  - 함수 선언문 전에, 함수의 호출이 가능하게 해줌
 *  - 함수 선언문은 함수 선언 이전에 호출이 가능함
 *
 */
function print() {
    console.log('hello');
}

/**
 * 변수(let, const)와 클래스는 선언만 호이스팅
 * 초기화는 되지 않는다.
 * 초기화 전에 접근하면, ReferenceError 발생
 */
// console.log(hi); // ReferenceError: Cannot access 'hi' before initialization

let hi = 'hello';
let fun = function () {};

//const cat = new Cat(); // ReferenceError: Cannot access 'Cat' before initialization
// 클래스는 선언됐지만 초기화되지 않음

class Cat {

}

let x = 1;
{
    console.log(x); // ReferenceError: Cannot access 'x' before initialization
    let x = 2; // 블록 내에서 호이스팅
}