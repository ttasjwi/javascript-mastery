const dog = {name: '와우', emoji: '🐶'};
console.log(Object.keys(dog));
console.log(Object.values(dog));
console.log(Object.entries(dog));

console.log('name' in dog); // 특정 key가 객체에 있는가
console.log(dog.hasOwnProperty('name')); // key가 있는지 여부

/**
 * 자바스크립트 엔진은 프로퍼티를 생성할 때 프로퍼티의 상태를 나타내는 프로퍼티 어트리뷰트를 기본적으로 기본값으로 자동 정의한다.
 * - 값, 값의 갱신 가능 여부, 열거 가능 여부, 재정의 가능 여부
 * - 프로퍼티 어트리뷰트는 자바스크립트 엔진이 관리하는 내부 슬롯의 상태값에 위치해있다. 따라서 직접 접근할 수 없지만,
 * Object.getOwnPropertyDescriptors(...), Object.getOwnPropertyDescriptor(...)을 통해 간접적으로 확인할 ㅅ ㅜ있다.
 *
 *
 */
const descriptors = Object.getOwnPropertyDescriptors(dog); // 객체의 모든 키에 대한 프로퍼티 디스크립터들
console.log(descriptors);

const des = Object.getOwnPropertyDescriptor(dog, 'name'); // 원하는 키의 프로퍼티 디스크립터
console.log(des);

// 프로퍼티 정의
Object.defineProperty(dog, 'name', {
    value: '멍멍', // 속성값
    writable: false, // 할당 연산자로 속성값을 변경 불가능한 지
    enumerable: false, // 객체의 속성 반복 열거 시 노출되는 지 여부
    configurable: false // 속성의 값을 변경할 수 있고, 객체에서 삭제할 수도 있는 지 여부
});
console.log(dog.name); // 이름이 변경됨
console.log(Object.keys(dog)); // 'emoji'만 노출됨
console.log(Object.values(dog));
console.log(Object.entries(dog));

delete dog.name;
console.log(dog.name); // configurable 하지 않으므로,   여전히 남아있음.

const student = {};
Object.defineProperties(student, {
    firstName: {
        value: '영희',
        writable: true,
        enumerable: true,
        configurable: true,
    },
    lastName: {
        value: '김',
        writable: true,
        enumerable: true,
        configurable: true,
    },
    fullName: {
        get() {
            return `${this.lastName} ${this.firstName}`;

        },
        set(name) {
            [this.lastName, this.firstName] = name.split(' ');
        },
        configurable: true,
    }
});
console.log(student);
console.log(student.fullName);
student.fullName = '불꽃 땃쥐';
console.log(student);
