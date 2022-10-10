// 배열 생성방법
let array = new Array(3);
console.log(array);

array = new Array(1,2,3);
console.log(array);

array = Array.of(1,2,3,4,5);
console.log(array);

const anotherArray = [1,2,3,4];
console.log(anotherArray);

array = Array.from(array); // 이터러블로부터 배열 생성
console.log(array);
array = Array.from('text');
console.log(array);

// 일반적으로 배열은 동일한 메모리 크기를 가지며, 연속적으로 이어져있어야함.
// 자바스크립트에서의 배열은 연속적으로 이어져있지 않고, 오브젝트와 유사함...!
// 자바스크립트의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체다!
// 이걸 보완하기 위해서 타입이 정해져 있는 타입 배열이 있음(Typed Collections)
array = Array.from({
    0: '안',
    1: '녕',
    length: 2,
}); // 오브젝트에 인덱스, length 정보를 지정하고 Array.from에 전달하면 배열로 만들 수 있다.
console.log(array);
