// 매개변수의 기본값은 무조건 undefined
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments에 저장됨
// 할당 연산자(=)를 통해 기본값(Default Parameters) 지정이 가능함. 값이 전달되면 전달된 값이 대입됨

function add(a, b) {
    console.log(a);
    console.log(b);
    console.log(arguments);
    return a + b;
}

function add2(a = 0, b = 0) {
    console.log(a);
    console.log(b);
    console.log(arguments);
    return a + b;
}

add(); // undefined, undefined, undefined;
add(1, 2, 3); // 1, 2, 3
add2(2, 2);

// Rest 매개변수 Rest Parameters
// 주의 : Rest Parameters 선언은 마지막에만 허용됨
function sum(a, b, ...numbers) {
    console.log(numbers);
}

sum(1, 2, 3, 4, 5, 6, 7, 8);
