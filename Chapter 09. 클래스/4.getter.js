
// 접근자 프로퍼티(Accessor Property)
// 1. get : 프로퍼티 자체 또는, 유도 프로퍼티 등을 접근할 때 프로퍼티처럼 접근할 수 있게 함.
// 2. set : 프로퍼티를 변경하려 할 때 혹은 유도 프로퍼티 등을 변경할 때 호출
class Student {
    #firstName;
    #lastName;

    constructor(firstName, lastName) {
        this.#firstName = firstName;
        this.#lastName = lastName;
    }

    get fullName() {
        return `${this.#lastName} ${this.#firstName}`;
    }

    set fullName(value) {
        console.log('set', value);
    }
}

const student = new Student("안나", "김");
console.log(student.fullName); // 접근 -> get 호출
student.fullName = '김철수'; // 할당 -> set 호출
