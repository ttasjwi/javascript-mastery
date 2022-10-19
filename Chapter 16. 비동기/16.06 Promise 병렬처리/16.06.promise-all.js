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

// 순차적으로 프로미스를 실행 (성능 이슈가 있을 수 있음)
getBanana()
    .then(banana => getApple()
                        .then(apple => [banana, apple])
    )
    .then(console.log);

// Promise.all : 병렬적으로 모든 프로미스들을 실행
Promise.all([getApple(), getBanana()])
    .then(fruits => console.log(`all : ${fruits}`));

// Promise.race : 주어진 Promise 중에서 제일 빨리 수행된 것이 이김!
Promise.race([getApple(), getBanana()])
    .then(fruit => console.log(`race : ${fruit}`));

// All 사용 도중 예외가 발생할 여지가 있을 경우 catch해서 처리해야한다
Promise.all([getBanana(), getApple(), getOrange()])
    .then(fruits => console.log('all-error : ', fruits))
    .catch(console.log);

// 모든 결과를 받아볼 떄 : allSettled
Promise.allSettled([getBanana(), getApple(), getOrange()])
    .then(fruits => console.log('all-settle', fruits));
