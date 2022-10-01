
// 객체를 손쉽게 만들 수 있는 템플릿
// 1. 생성자 함수 (오래된 고전적인 방법)
// 2. 클래스

class Fruit {
    constructor(name, color) {
        // 생성자 : new 키워드로 객체를 생성할 때 사용하는 함수
        this.name = name;
        this.color = color;
    }

    display = () => {
        console.log(`${this.name}: ${this.color}`);
    };

}

// apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit("apple", "red");
// banana은 Fruit 클래스의 인스턴스이다.
const banana = new Fruit("banana", "yellow");

console.log(apple);
console.log(apple.name);
console.log(apple.color);
apple.display();
console.log();

console.log(banana);
console.log(banana.name);
console.log(banana.color);
banana.display();

// obj는 객체이고, 그 어떤 클래스의 인스턴스도 아니다.
const obj = {name: 'ttasjwi'}
