// Object literal {key : value}
// new Object()
// Object.create();

// key - 문자, 숫자, 문자열, 심볼
// value - 원시값, 객체(함수)

let apple = {
    name: 'apple',
    'hello': 'hello~Bye!!!!!!!!!!!!!',
    0:1,
    ['hello-bye1']: 'hello-bye?????????????'
}

// 속성, 데이터에 접근하기 위해서는
console.log(apple.name); // 마침표 표기법 dot notation
console.log(apple['hello-bye1']); // 대괄호 표기법 bracket notation
console.log(apple[['name']]);
console.log();

// 속성 추가
apple.color = 'blue';
console.log(apple.color);
console.log(apple['color']); // 그런데 이렇게 할 바에... 카멜케이스를 지켜서 변수명을 짓고 마침표 표기법을 쓰는게 낫다

// 속성 삭제
delete apple.color;
console.log(apple);
