/**
 * 정적 바인딩 방법
 * 1. bind 함수를 이용하여 수동적으로 바인딩 하기
 * 2. 화살표 함수를 이용하여 바인딩
 *  - Arrow Function은 생성된 시점의 렉시컬 환경에서의 this를 기억한다.
 *  - Arraw Function에서 제일 가까운 스코프의 this를 가리킴
 *
 */

function Cat(name) {
    this.name = name;
    //this.printName = function()  {
    this.printName = () => {
        console.log(`고양이의 이름을 출력한다옹: ${this.name}`);
    };
    //this.printName = this.printName.bind(this); // bind 함수를 이용해 수동 바인딩

}

function Dog(name) {
    this.name = name;
    this.printName = function () {
        console.log(`강아지의 이름을 출력한다옹: ${this.name}`);
    };
}

const cat = new Cat('냐옹');
const dog = new Dog('멍멍');
cat.printName();
dog.printName();

dog.printName = cat.printName;
dog.printName(); // 고양이의 이름을 출력한다옹: 멍멍 (dog 인스턴스가 호출했으므로, dog의 프로퍼티 this.name이 바인딩 됨)

function printOnMonitor(printName) {
    console.log('모니터를 준비하고, 전달된 콜백을 실행!')
    printName();
}

printOnMonitor(cat.printName); // 호출한 쪽 기준에 맞게, 동적으로 this가 호출됨 => undefined
