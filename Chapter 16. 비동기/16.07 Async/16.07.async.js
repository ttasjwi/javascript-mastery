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

// ๋ฐ๋๋์ ์ฌ๊ณผ๋ฅผ ๊ฐ์ด ๊ฐ์ง๊ณ  ์ค๊ธฐ
async function fetchFruits() { // async(๋๊ธฐํ) : ๋ด๋ถ์ ์ธ ๋ก์ง๋ค์ ๋๊ธฐ์ ์ผ๋ก
    const banana = await getBanana(); // ๋ฐ๋๋๋ฅผ ๋ฐ์์ฌ ๋๊น์ง ๊ธฐ๋ค๋ฆผ
    const apple = await getApple();
    return [banana, apple]; // ํจ์์ async๊ฐ ๋ถ์ด์์ผ๋ฉด ๋ฆฌํด๊ฐ์ resolveํ๋ Promise๋ฅผ ๋ฐํํ๋ค
}

fetchFruits()
    .then(fruits => console.log(fruits));
