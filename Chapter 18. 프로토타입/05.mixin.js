// 오브젝트는 단 하나의 프로토 타입을 가리킬 수 있다. (부모는 단 하나!)
// 하지만! 여러 함수를 상속하고 싶을 때 : MixIn 사용

const play = {
    play: function () {
        console.log(`${this.name} 놀아요!`);
    },
};

const sleep = {
    sleep: function () {
        console.log(`${this.name} 자요!`)
    }
};

function Dog(name) {
    this.name = name;
}
Object.assign(Dog.prototype, play, sleep); // 믹스인

const dog = new Dog('멍멍');
console.log(dog);
dog.play();
dog.sleep();

class Animal {};
class Tiger extends Animal { // 내부적으로 프로토타입을 베이스로 함

    constructor(name) {
        super();
        this.name = name;
    }
}
Object.assign(Tiger.prototype, play, sleep); // 믹스인

const tiger = new Tiger("어흥");
tiger.play();
tiger.sleep();
