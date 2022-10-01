// 메서드
// 1. 인스턴스 프로퍼티, 메서드
// 2. static(클래스) 프로퍼티, 메서드

class Fruit {

    static MAX_FRUITS = 4; // 클래스 프로퍼티

    constructor(name, color) {
        // 생성자 : new 키워드로 객체를 생성할 때 사용하는 함수
        this.name = name;
        this.color = color;
    }

    // 클래스 메서드
    static makeRandomFruit() {
        return new Fruit("watermelon", "green");
    }

    // 인스턴스 메서드
    display = () => {
        console.log(`${this.name}: ${this.color}`);
    };

}

const watermelon = Fruit.makeRandomFruit(); // 클래스 메서드
console.log(watermelon);
console.log(Fruit.MAX_FRUITS); // 클래스 프로퍼티

Math.pow(2,2); // 여러가지 클래스 메서드
Number.isFinite(1);
