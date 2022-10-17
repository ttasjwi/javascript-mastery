// Set
const set = new Set([1, 2, 3]);
console.log(set);

// size
console.log(set.size);

// 값의 존재 여부
console.log(set.has(2));
console.log(set.has(6));

// 순회 가능! (Iterable)
set.forEach(item => console.log(item));
console.log();

for (const value of set.values()) {
    console.log(value);
}
console.log();

// 추가
set.add(4);
console.log(set);
set.add(4);
console.log(set); // 중복 추가 x
console.log();

// 삭제
set.delete(4);
console.log(set);
console.log();

// 일괄 삭제
set.clear();
console.log(set);

const obj1 = {name: 'apple', price:8};
const obj2 = {name: 'banana', price:5};
const objs = new Set([obj1, obj2]); // 객체들의 Set. 객체의 참조가 복사되어 전달된다. (shallow Copy)
console.log(objs);

obj1.price = 10;
objs.add(obj1);
console.log(objs);

const obj3 = {name: 'banana', price:5}; // 참조가 다르다. obj2와 다르다
objs.add(obj3);
console.log(objs);
