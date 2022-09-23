function add(a, b) {
    return a + b;
}

// return을 명시적으로 하지 않으면 자동으로 undefined가 반환됨.
function print(text) {
    console.log(text);
}

const result1 = add(1, 2);
console.log(result1);

const result = print('text');
console.log(result); // undefined

function printNum(num) {
    if (num < 0) {
        return;
        // return undefined; 함수 조기 종료
    }
    console.log(num);
}

printNum(-1);
