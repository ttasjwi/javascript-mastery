{
    function a() {
        for (let i=0; i<10000000000000; i++);
        return 1;
    }

    function b() {
        return a() + 1;
    }

    function c() {
        return b() + 1;
    }

    console.log('시작했다!');
    // 매우 시간이 오래 걸림
    // => 자바스크립트는 기본적으로 싱글 스레드 콜 스택에서, 작업이 동기적으로 실행되기 때문에 무거운 작업이 실행되면 문제가 된다.

    const result = c();
    console.log(result);
}
