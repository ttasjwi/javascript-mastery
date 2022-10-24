const text = 'hello';

function func() {
    console.log(text);
}
func(); // 'hello';

function outer() {
    const x = 0;
    function inner() {
        console.log(`inside inner: ${x}`);
    }
    return inner; // inner 함수만 반환되는 것이 아니라 inner 함수의 렉시컬 환경까지 같이 반환됨
}
const func1 = outer();
func1(); // 0
