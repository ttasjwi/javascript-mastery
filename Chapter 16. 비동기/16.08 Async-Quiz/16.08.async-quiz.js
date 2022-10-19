function fetchEgg(chicken) {
    // return new Promise((resolve, reject) ...
    return Promise.resolve(`${chicken} => 🥚`); // 전달받은 값을 resolve한다. (콜백함수의 인자로 전달한다.)
}

function fryEgg(egg) {
    return Promise.resolve(`${egg} => 🍳`)
}

function getChicken() {
    return Promise.reject("치킨을 가지고 올 수 없음.");
    //return Promise.resolve(`☘=> 🐔`);
}

async function makeFriedEgg() {
    let chicken;
    try {
        chicken = await getChicken();
    } catch (error) {
        chicken = '🐔';
    }
    const egg = await fetchEgg(chicken);
    const friedEgg = await fryEgg(egg);
    return friedEgg;
}

makeFriedEgg()
.then(console.log);
