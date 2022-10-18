// 주어진 seconds(초)가 지나면, callback 함수를 호출함
// 단, seconds가 0이하거나, 이상한 인자가 전달되면 error를 던지자!
function runInDelay(callback, seconds) {
    if (!callback) {
        console.log('callback 함수를 전달해야 함');
    }
    if (!seconds || seconds <= 0) {
        throw new Error("0보다 큰 시간을 지정해주세요.");
    }
    setTimeout(callback, seconds * 1000);
    return;
}

try {
    runInDelay(() => console.log('a'), 3);
    runInDelay(() => console.log('b'), 2);
    runInDelay(() => console.log('c'), 1);
} catch (error) {
    console.log('예외 발생!');
}
