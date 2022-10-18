{
    function runInDelay(seconds) {
        return new Promise((resolve, reject) => {
            if (!seconds || seconds < 0) {
                reject(new Error("0보다 큰 시간을 지정해주세요.")); // reject : 실패했을 때 발생시킬 에러
            }
            setTimeout(
                // () => {resolve();},
                resolve, seconds * 1000); // resolve : 전달될 콜백함수라고 생각하면 됨
        });
    }

    runInDelay(-1)
        .then(() => {
            console.log('타이머 완료!');
        }) // 콜백함수를 전달 (성공할 때 호출)
        .catch(console.error) // (실패할 때 호출하는 콜백함수 전달)
        .finally(() => console.log('끝났다!')); // 성공 실패 상관 없이 마지막에
    // promise에서 예외가 발생한걸 catch하지 않으면, 예외가 발생한다.

}
