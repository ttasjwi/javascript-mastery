// Bubbling up, Propagating
function a() {
    throw new Error('error!');
}

function b() {
    try {
        a();
    } catch (error) {
        console.log('이 예외는 내가 처리할 수 없어...');
        throw error; // 한 가지 아쉬운 점 : 예외를 인자로 하여 다른 예외를 생성할 수 없을까?
    }
}

function c() {
    b();
}

try {
    c();
} catch (error) {
    console.log('Catched!');
}
console.log('done!');
