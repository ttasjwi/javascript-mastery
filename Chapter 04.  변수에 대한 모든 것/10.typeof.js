/**
 * 동적 타입 언어
 * - 별도의 컴파일을 거쳐서 타입이 결정되지 않음
 * - 런타임에 인터프리터가 코드를 한줄 한줄 실행하는 과정에서 타입이 결정
 * - 할당된 값에 따라 타입이 결정된다.
 */

/**
 * typeof ~ : 뒤에 오는 표현식의 평가 결과 타입을 문자열로 반환한다.
 */
let variable;
console.log(typeof variable); // undefined

variable = '';
console.log(typeof variable); // string

variable = 123; // 할당된 값에 따라 타입이 결정
console.log(typeof variable); // number

variable = {};
console.log(typeof variable); // object

variable = function () {};
console.log(typeof variable); // function

variable = Symbol();
console.log(typeof variable); // symbol

variable = typeof variable;
console.log(typeof variable); // string
