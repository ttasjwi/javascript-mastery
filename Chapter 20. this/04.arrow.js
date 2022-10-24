/**
 * 자바스크립트의 함수는 다재 다능하다.
 * 함수로서 사용 가능하고, 생성자 함수로 사용도 가능하다. (클래스)
 * 하지만, 이를 위해 불필요한 프로토 타입(많은 데이터를 가지고 있는 객체)가 생성된다.
 */

const dog = {
    name: 'Dog',
    //play: function() {
    play: () => { // 화살표 표현식 => 생성자 함수처럼 만들어지지 않고, 정적 바인딩
        //💩
        console.log('논다... 멍!!!'); // 함수 표현식 => 생성자 함수처럼 만들어지므로, 내부적으로 프로토 타입을 가진다.
    },
}
dog.play();
// const obj = new dog.play(); //💩
//console.log(obj);

//ES6
const cat = {
    name: 'cat',
    play() { // 메서드 선언 방법 오브젝트에 속한 함수
        console.log('nyaong');
    }
}
console.log(cat);

cat.play();
//const obj1 = new obj.play(); // 생성자 함수로 사용할 수 없다.
// console.log(obj1); // TypeError: obj.play is not a constructor

/**
 * 화살표 함수의 특징
 * 1. 문법이 깔끔함.
 * 2. 생성자 함수로 사용이 불가능 => 무거운 프로토타입을 만들지 않음
 * 3. 함수 자체 arguments 도 갖고 있지 않음
 * 4. this에 대한 바인딩이 정적으로 결정됨
 *  - 함수에서 제일 근접한 상위 스코프의 this에 정적으로 바인딩 됨
 */
function sum(a,b) {
    console.log(arguments);
}
sum(1,2);

const add = (a,b) => { // 화살표 함수
    console.log(arguments); // 상위스코프 this가 Node이므로 Node 실행 시점의 인자가 전달됨
}
add(1,2);

const printArrow = () => {
    console.log(this); // 상위 스코프 (전역)의 this인 모듈 정보가 전달
};
printArrow();

cat.printArrow = printArrow;
cat.printArrow(); // 정적으로 전덜된 노드 모듈의 this가 전달됨

