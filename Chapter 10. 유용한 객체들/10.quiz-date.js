/**
 * 1초마다 시계를 (날짜 포함) 출력해보자.
 */

setInterval(() => {
    const now = new Date();
    console.log(now.toLocaleString('ko-KR'));
}, 1000);
