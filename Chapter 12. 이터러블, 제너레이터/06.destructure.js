// 구조 분해 할당 (Destructuring Assignment)
// 데이터 뭉치(그룹화)를 쉽게 만들 수 있다.
const fruits = ['green apple', 'kiwi', 'straw-berry', 'banana'];
const [first, second, ...others] = fruits;
console.log(fruits);
console.log(first);
console.log(second);
console.log(others);

const point = [1, 2, 8];
const [x, y, z = 0] = point; // 디폴트 값 지정도 가능. 값이 있으면 그게 더 우선도가 높다
console.log(x);
console.log(y);
console.log(z); // 8

function createMember() {
    return ['땃쥐', 'ttasjwi']; // 배열을 이용해 값을 2개 반환
}

const [name, loginId] = createMember(); //
console.log(name);
console.log(loginId);

const ttasjwi = {name:'ttasjwi', age:20, job:'s/w engineer'};
function display({name, age, job}) { // 함수 매개변수에 구조분해할당 사용 (필드명 같아야함)
    console.log('이름:', name);
    console.log('나이:', age);
    console.log('직업:', job);
};
display(ttasjwi);

const jpaBook = {title:'자바 ORM 표준 JPA 프로그래밍', author:'김영한', price:10000};
const {title, author:book_author, price = 20000} = jpaBook; // 객체의 필드명 변경도 가능. 기본값 지정 가능
console.log(title);
console.log(book_author);
console.log(price);
