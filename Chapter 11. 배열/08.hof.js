const fruits = ['banana', 'strawberry', 'grape', 'strawberry'];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// 배열을 순회하면서 원하는 것(콜백함수)을 할 때
// java stream의 forEach와 비슷한 듯
fruits.forEach(function (value) {
    // 파라미터로 value(저장값), index(인덱스), array(배열)을 넘길 수 있는데,
    // value만 넘겨도 된다.
        console.log('-------------------');
        console.log(value);
    }
)
console.log();

fruits.forEach(element => console.log(element));


// 조건에 맞는(콜백함수) item을 찾을 때
// find : 제일 먼저 조건에 맞는 item 반환
const item1 = {name: 'milk', price: 2};
const item2 = {name: 'cookie', price: 3};
const item3 = {name: 'rice-ball', price: 1};
const products = [item1, item2, item3, item2];

let result = products.find(value => value.name === 'cookie');
console.log(result);

// findIndex : 제일 먼저 조건에 맞는 item의 index 반환
result = products.findIndex(value => value.name === 'cookie');
console.log(result);

// 배열의 item들이 부분적으로 조건(콜백 함수)에 맞는지 확인
// 조건에 맞는 요소의 존재성 여부를 반환 (java의 anyMatch)
result = products.some((item) => item.name === 'cookie');
console.log(result);

// 배열의 item들이 전부 조건(콜백 함수)에 맞는지 확인
// 조건에 모든 요소가 부합하는 지 여부를 반환(java의 allMatch)
result = products.every(item => item.name === 'cookie');
console.log(result);

// 조건에 맞는 모든 item들을 새로운 배열로!
// java의 filter와 비슷
result = products.filter(item => item.name === 'cookie');
console.log(result);


const nums = [1,2,3,4,5];
result = nums.map(item => {
    if (item % 2 === 0) {
        return item * 2;
    } else {
        return item;
    }
});
console.log(result);

result = nums.map(item => [1,2]);
console.log(result);

// map의 결과가 배열일 때, 각 요소를 낱개로 풀어줌
result = ['dream', 'coding'].flatMap(text => text.split(''));
console.log(result);

// sort : 정렬 (배열의 item들을 정렬
// 문자열 형태의 오름차순으로 요소를 정렬하고, 기존의 배열을 변경
const texts = ['hi', 'abc'];
texts.sort();
console.log(texts);

const numbers = [0,5,4,2,1,10];
numbers.sort();
console.log(numbers); // 문자열로 변환한 결과를 오름차순으로 정렬하게 됨..

// < 0 : a가 앞으로 정렬, 오름차순
// > 0 : b가 앞으로 정렬, 내림차순

numbers.sort((a,b) => a-b);
console.log(numbers); // java의 compareable 구현과 비슷함 (a-b <0 이면, a<b로 보고 a가 앞섬)

// reduce : 누적함수
result = [1,2,3,4,5].reduce((sum, value) => {
    sum += value;
}, 0); // 누적함수, 초깃값

console.log(result);
