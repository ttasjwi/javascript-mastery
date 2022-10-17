
// 옵셔널 체이닝 연산자 (Optional Chaining Operator)
// ES11 이후 추가 (ECMAScript 2020)
// ?. : null 또는 undefined를 확인할 때

let item = {price : 1};
const price = item?.price; // item이 있니? 있으면 뒤의 것을
console.log(price);

let obj = {name: 'dog', owner: {name: '땃쥐'}};
// console.log(obj && obj.owner && obj.owner.name);
console.log(obj?.owner?.name);
