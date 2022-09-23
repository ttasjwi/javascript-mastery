// 함수 선언문 function name() {}
// 함수 표현식 const name = function() {}

// 익명 함수를 add에 할당함.
let add = function (a, b) {
    return a + b;
};
console.log(add(1, 2));

// 화살표 함수 const name = () => { }
let add2 = (a, b) => a + b;
console.log(add2(1, 2));

// 생성자 함수 const object = new Function(); // 뒤 객체편


// IIFE (Immediately-Invoked Function Expressions) : 즉각적으로 실행되는 함수
(function () {
    console.log('run!!!')
})();
