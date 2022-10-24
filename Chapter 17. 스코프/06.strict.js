/**
 * 엄격 모드 strict mode
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
 * React와 같은 프레임워크에서는 사용시 기본적으로 엄격 모드
 *
 */
'use strict';
function add(x) {
    var a = 2;
    var b = a + x; // ReferenceError: b is not defined
    console.log(this); // undefined
}
add(1);

const array = [1,2,3];
for (num of array) { // ReferenceError: num is not defined
    console.log(num);
}
