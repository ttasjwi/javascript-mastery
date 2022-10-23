/**
 * var의 특징
 * - 일반 코딩 방식과 어긋나서 개발하면서 멘붕이 옴
 * - 코드의 가독성, 유지보수성에 좋지 않음
 */


// 1. 변수 선언 키워드 없이 선언 & 할당이 가능함
// - 선언인지 재할당인지 구분이 어려움

something = 'trash';
console.log(something);
console.log();

// 2. 중복 선언이 가능함
var poo = 'trash';
var poo = 'trash';
console.log(poo);
console.log();

// 3. 블록 레벨 스코프가 적용되지 않는다.
var apple = 'apple';
console.log(apple); // apple
{
    var apple = 'red apple';
    console.log(apple); // red apple
    {
        var apple = 'green apple';
        console.log(apple); // green apple
    }
    console.log(apple); // green apple
}
console.log(apple);  // green apple
console.log();


// 4. 호이스팅 직후 undefined가 할당되어 접근 가능함
console.log(x); // undefined
var x = 0;
console.log();

// 5. 그나마 다행인건, 함수 레벨 스코프만 지원됨.
function example() {
    var dog = 'dog';
}

// console.log(dog); // ReferenceError: dog is not defined
