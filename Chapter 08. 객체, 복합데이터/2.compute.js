// 객체 프로퍼티에 동적으로 접근하기
// 동적으로 속성에 접근, 추가, 삭제할 때는 대괄호 표기법을 사용하자
// 참고 : mdn 객체로 작업하기  - https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Working_with_Objects

const obj = {
    name: '땃쥐',
    age: 20,
}
// 코딩하는 시점에 정적으로 접근이 확정됨
obj.name;
obj.age;

// 동적으로 속성에 접근하고 싶을 때는, 대괄호 표기법 사용
function getValue(obj, key) {
    return obj[key]
}

console.log(getValue(obj, 'name'));

function addKey(obj, key, value) {
    obj[key] = value;
}
addKey(obj, 'job', 'engineer');
console.log(obj);

function deleteKey(obj, key) {
    delete obj[key];
}
deleteKey(obj, 'job');
console.log(obj);