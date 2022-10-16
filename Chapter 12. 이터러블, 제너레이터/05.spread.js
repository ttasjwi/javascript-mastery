// Spread 연산자, 전개 구문
// 모든 Iterable은 Spread 될 수 있다.
// 순회가 가능한 모든 것들은 펼쳐질 수 있다.

// func(...iterable)
// [...iterable]
// {...obj} Ecmascript 2018 이후 도입

function add(a, b, c) {
    return a + b + c;
}

const nums = [1, 2, 3];
const result = add(...nums); // 파이썬의 전개 연산자(*)와 비슷한데...?
console.log(result);

// Rest paramebers
function sum(first, second, ...nums) {
    console.log(nums);
}

sum(1,2,0,1,2,4);

// Array Concat
const fruits1 = ['green-apple', 'kiwi'];
const fruits2 = ['strawberry', 'banana'];
// let arr = fruits1.concat(fruits2);
let arr = [...fruits1, ...fruits2];
console.log(arr);

// Object
const ttasjwi = {name: 'ttasjwi', age: 20, home: {address: 'home'}};
const updated = {
    ...ttasjwi, job:'s/w engineer', // 내용물을 shallow copy(얕은 복사)함에 주의!
}
console.log(ttasjwi);
console.log(updated);
