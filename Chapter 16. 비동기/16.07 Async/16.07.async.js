function getBanana() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('🍌');
        }, 1000);
    });
}

function getApple() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('🍎');
        }, 3000);
    });
}

function getOrange() {
    return Promise.reject(new Error('no orange'));
}

// 바나나와 사과를 같이 가지고 오기
async function fetchFruits() { // async(동기화) : 내부적인 로직들을 동기적으로
    const banana = await getBanana(); // 바나나를 받아올 때까지 기다림
    const apple = await getApple();
    return [banana, apple]; // 함수에 async가 붙어있으면 리턴값을 resolve하는 Promise를 반환한다
}

fetchFruits()
    .then(fruits => console.log(fruits));
