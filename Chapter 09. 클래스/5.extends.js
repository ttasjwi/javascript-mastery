class Animal {
    constructor(color) {
        this.color = color;
    }

    eat() {
        console.log('먹자!')
    }

    sleep() {
        console.log('잔다...')
    }

}

class Tiger extends Animal {}

const tiger = new Tiger('yellow');
console.log(tiger);
tiger.sleep();
tiger.eat();

class Dog extends Animal {

    constructor(color, ownerName) {
        super(color); // 상위 클래스의 생성자
        this.ownerName = ownerName;
    }

    play() {
        console.log('놀자아~!')
    }

    // overriding : 상위 클래스의 메서드를 하위 클래스에서 재정의
    eat() {
        super.eat(); // super.xx() : 상위 클래스의 메서드 호출
        console.log('강아지가 먹는다...')
    }
}

const dog = new Dog('빨강이', '땃쥐');
console.log(dog);
dog.sleep();
dog.eat();
dog.play();
