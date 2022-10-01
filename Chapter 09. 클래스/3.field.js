
// 접근 제어자 - 캡슐화
// private(#) , public(기본), protected

class Fruit {
    #name; // # 필드는 외부에서 접근 불가능하다
    #color;
    #type = '과일';

    constructor(name, color) {
        // 생성자 : new 키워드로 객체를 생성할 때 사용하는 함수
        this.#name = name;
        this.#color = color;
    }

    // 인스턴스 메서드
    #display = () => {
        console.log(`${this.name}: ${this.color}`);
    };

}

const apple = new Fruit("apple", "red");
console.log(apple);
// apple.#name; // private 프로퍼티 호출 불가
apple.#dissplay(); // private 메서드 호출 불가

