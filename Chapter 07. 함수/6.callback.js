// 콜백함수
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

// 전달된 action은 콜백함수이다.
// 전달될 당시에 함수를 바로 호출해서 반환된 값을 전달하는 것이 아니라
// 함수를 가리키고 있는 함수의 reference(참조값)이 전달된다.
// 그래서 함수는 고차함수안에서 필요한 순간에 호출이 나중에 됨.
function calculator(a, b, action) {
    if (a <0 || b < 0) {
        return;
    }
    let result = action(a, b); // 콜백함수는 실제로 나중에 필요할 때 호출됨
    console.log(`calculator result=${result}`);
    return result;
}

calculator(1, 2, add);
calculator(1, 2, multiply);
calculator(-1,-1, multiply);
