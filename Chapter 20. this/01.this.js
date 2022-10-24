'use strict';

/**
 * 글로벌 컨텍스트의 this
 * - 브라우저
 * - 노드 : 모듈
 */


const x = 0;
module.exports.x= x;
console.log(this); // Node ; 모듈, 브라우저 : window
console.log(globalThis); // Node : global, 브라우저 : Window
console.log();

/**
 * 함수 내부에서의 this : globalThis
 * 엄격모드 : undefined
 * 느슨한 모드 : globalThis
 */
function fun() {
    console.log(this); // 주의 : 엄격모드 undefined
}
fun();

/**
 * 생성자 함수 또는 클래스에서의 this, 앞으로 생성될 인스턴스 자체를 가리킴
 */
function Cat(name) {
    this.name = name;
    this.printName = function() {
        console.log(this.name);
    };
}
const cat1 = new Cat('야옹');
const cat2 = new Cat('미야옹');
cat1.printName();
cat2.printName();
