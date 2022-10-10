// 얕은 복사(shallow copy)
// Array.from, concat, slice, spreade(...), Object.assign

const pizza = {name:'pizza', price: 2};
const ramen = {name:'ramen', price: 3};
const sushi = {name:'sushi', price: 1};

const store1 = [pizza, ramen];
const store2 = Array.from(store1); // 배열의 주소는 다르지만 내부적으로 갖고 있는 참조값은 그대로 복사됨

console.log('store1 : ', store1);
console.log('store2 : ', store2);
console.log();

store2.push(sushi);
console.log('store1 : ', store1);
console.log('store2 : ', store2);
console.log();

pizza.price = 4; // 내부적으로 가진 메모리 주소는 동일하기 때문에, 모든 곳이 수정됨
console.log('store1 : ', store1);
console.log('store2 : ', store2);
console.log();
