// 클래스를 기반으로 한 객체지향 프로그래밍
class Animal {
    #name;
    #emoji;

    constructor(name, emoji) {
        this.#name = name;
        this.#emoji = emoji;
    }

    printName() {
        console.log(`${this.#name} ${this.#emoji}`);
    }
}

class Dog extends Animal {

    #owner;

    constructor(name, emoji, owner) {
        super(name, emoji);
        this.#owner = owner;
    }

    play() {
        console.log("같이 놀자옹!");
    }
}

const dog1 = new Dog('멍멍', '🐶', '땃쥐');
dog1.play();
dog1.printName();
console.log();


class Tiger extends Animal {

    constructor(name, emoji) {
        super(name, emoji);
    }

    hunt() {
        console.log('사냥하자...!');
    }
}

const tiger1 = new Tiger('어흥', '🐯');
tiger1.printName();
tiger1.hunt();

console.log(dog1 instanceof Dog); // 어떤 클래스를 상속하는지, 어떤 프로토 타입을 따르는 지
console.log(dog1 instanceof Animal);
console.log(dog1 instanceof Tiger); // false
console.log();

console.log(tiger1 instanceof Dog);
console.log(tiger1 instanceof Animal);
console.log(tiger1 instanceof Tiger);
