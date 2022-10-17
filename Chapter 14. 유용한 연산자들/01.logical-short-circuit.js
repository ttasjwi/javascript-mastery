
// 논리 연산자 Logical Operator
// && 그리고
// || 또는
// 단축평가 : Short-circuit evaluation

const obj1 = {name: 'dog'};
const obj2 = {name: 'cat', owner:'ttasjwi'};

if (obj1 && obj2) { // 조건문 안에서는 각각이 순서대로 boolean으로 평가됨.
    console.log('둘다 true!');
}

if (obj1 || obj2) { // 앞의 연산을 평가하여 true면, 무조건  true
    console.log('둘 중 하나가 true');
}

let result = obj1 && obj2; // 조건문 밖 && 연산자 : 앞의 것이 true이면 뒤의 것은 평가하지 않고 바로 할당된다. 앞이 false이면 앞의 것이 평가된다.
console.log(result);

result = obj1 || obj2; // 조건문 밖 || 연산자 : 앞의 것이 true이면 바로 앞의 것이 할당된다. 앞이 false이면 뒤의 것이 평가된다.
console.log(result);
console.log();

// 활용예
// && : 조건이 truthy일 때 && 무언가를 해야할 경우
// || : 조건이 falshy일 때 || 무언가를 해야할 경우
function changeOwner(animal) {
    if (!animal.owner) {
        throw new Error("주인이 없어요...");
    }
    animal.owner = '바뀐 주인!';
}
function makeNewOwner(animal) {
    if (animal.owner) {
        throw new Error("주인이 이미 있어요...")
    }
    animal.owner = '새로운 주인!';
}


obj1.owner && changeOwner(obj1); // false && ...
obj2.owner && changeOwner(obj2); // true && ... -> 뒤의 것이 평가됨
console.log(obj1);
console.log(obj2);
console.log();

obj1.owner || makeNewOwner(obj1); // false || ... -> 뒤의 것이 평가됨
obj2.owner || makeNewOwner(obj2); // true || ... ->
console.log(obj1);
console.log(obj2);

// null 또는 undefined인 경우를 확인할 때
let item; // = {price: 1};
const price = item && item.price; // undefined
console.log(price);
console.log();

// 기본값 설정
// || : falshy한 경우 설정(할당) : 0, -0, undefined, ''
function print1(message) {
    const text = message || 'hello';
    console.log(text);
}
print1();
print1(undefined);
print1(null);
print1(0);
console.log();

// 기본값 설정
// default parameter : 전달하지 않거나, undefined 전달될 때만 적용됨
function print2(message = 'Hi') {
    console.log(message);
}

print2();
print2(undefined);
print2(null);
print2(0);
print2();
