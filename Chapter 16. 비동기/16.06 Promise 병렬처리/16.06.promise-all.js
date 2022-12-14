function getBanana() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('๐');
        }, 1000);
    });
}

function getApple() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('๐');
        }, 3000);
    });
}

function getOrange() {
    return Promise.reject(new Error('no orange'));
}

// ์์ฐจ์ ์ผ๋ก ํ๋ก๋ฏธ์ค๋ฅผ ์คํ (์ฑ๋ฅ ์ด์๊ฐ ์์ ์ ์์)
getBanana()
    .then(banana => getApple()
                        .then(apple => [banana, apple])
    )
    .then(console.log);

// Promise.all : ๋ณ๋ ฌ์ ์ผ๋ก ๋ชจ๋  ํ๋ก๋ฏธ์ค๋ค์ ์คํ
Promise.all([getApple(), getBanana()])
    .then(fruits => console.log(`all : ${fruits}`));

// Promise.race : ์ฃผ์ด์ง Promise ์ค์์ ์ ์ผ ๋นจ๋ฆฌ ์ํ๋ ๊ฒ์ด ์ด๊น!
Promise.race([getApple(), getBanana()])
    .then(fruit => console.log(`race : ${fruit}`));

// All ์ฌ์ฉ ๋์ค ์์ธ๊ฐ ๋ฐ์ํ  ์ฌ์ง๊ฐ ์์ ๊ฒฝ์ฐ catchํด์ ์ฒ๋ฆฌํด์ผํ๋ค
Promise.all([getBanana(), getApple(), getOrange()])
    .then(fruits => console.log('all-error : ', fruits))
    .catch(console.log);

// ๋ชจ๋  ๊ฒฐ๊ณผ๋ฅผ ๋ฐ์๋ณผ ๋ : allSettled
Promise.allSettled([getBanana(), getApple(), getOrange()])
    .then(fruits => console.log('all-settle', fruits));
