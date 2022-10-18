{
    function execute() {
        console.log('1');
        setTimeout(() => console.log('2'), 3000);
        // 1. node 환경(멀티스레드) 시간 지연을 수행하게 하고, taskQueue에 콜백함수를 Push하게 한다.
        // 2. 이벤트 루프는 콜스택과 TaskQueue를 감시하고 있다가, CallStack이 비면 TaskQueue의 콜백함수를 콜스택에 올린다.
        console.log('3');
    }

    execute(); // 1, 3, 2 순으로 실행됨.
}
