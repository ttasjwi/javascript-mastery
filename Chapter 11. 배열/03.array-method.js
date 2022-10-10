// 배열의 함수들
// 배열 자체를 변경하는지, 새로운 배열을 반환하는지

const fruits = ['banana', 'apple', 'mango'];

// 특정 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits)); // 배열이므로 true
console.log(Array.isArray({})); // 빈 오브젝트는 배열이 아니므로 false

// 특정 아이템의 위치를 찾을 때
console.log(fruits.indexOf('banana'));

// 배열 안에 특정 item이 있는 지 체크
console.log(fruits.includes('apple'));

// 추가 - 제일 뒤에 추가 (배열 자체를 수정)
let length = fruits.push('peach'); // 배열 자체를 변경 후 변경 이후의 길이를 반환
console.log(fruits);
console.log(length);

// 추가 - 제일 앞에 추가 (배열 자체를 수정)
length = fruits.unshift('grape'); // 제일 앞에 추가 후 변경 이후의 길이를 반환
console.log(fruits);
console.log(length);

// 제거 - 제일 뒤 제거 (배열 자체를 수정)
let lastItem = fruits.pop(); // 제거 후 제거된 item 반환
console.log(fruits);
console.log(lastItem);


// 제거 - 제일 앞 제거 (배열 자체를 수정)
let firstItem = fruits.shift(); // 제거 후 제거된 item 반환
console.log(fruits);
console.log(firstItem);

// 중간에 추가 혹은 삭제 (배열 자체를 수정)
const deleted = fruits.splice(1, 1); // start 인덱스부터 deleteCount개 제거, 삭제된 결과물을 배열로 반환
console.log(fruits);
console.log(deleted);

fruits.splice(1, 0, 'watermelon', 'melon'); // 0개를 삭제하고, 중간 삽입
console.log(fruits);

// 잘라진 새로운 배열을 만듬 (새로운 배열을 반환)
let newArr = fruits.slice(0, 2); // 끝 포함 x
console.log(newArr);
console.log(fruits); // 원래 배열은 그대로 유지

newArr = fruits.slice(); // 0부터
console.log(newArr);
newArr = fruits.slice(1);
console.log(newArr);
newArr = fruits.slice(-1); // 뒤에서 1부터
console.log(newArr);

// 배열 붙이기 (새로운 배열을 반환)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3);

// 배열 순서를 거꾸로 (새로운 배열을 반환)
const arr4 = arr3.reverse();
console.log(arr4);

// 중첩된 배열을 하나의 배열로 쫙 펴기 (평탄화, 새로운 배열을 반환)
let arr = [
    [1, 2, 3],
    [4, [5, 6]],
];
console.log(arr);
console.log(arr.flat()); // 1단계까지만 풀 수 있음.
console.log(arr.flat(2)); // 단계 지정


// 특정한 값으로 배열 채우기 (배열 자체를 수정)
arr = [1, 2, 3, 4, 5, 6];
arr.fill(0);
console.log(arr);

arr.fill('s', 1,3); // 시작, 끝 지정(끝 미포함)
console.log(arr);

arr.fill(1, 1); // 시작만 지정
console.log(arr);

// 배열을 문자열로 합하기
let text = arr.join();
console.log(text); // 기본 구분자 : commma

text = arr.join(' | '); // 구분자 지정 가능
console.log(text);
