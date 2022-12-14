function fetchEgg(chicken) {
    // return new Promise((resolve, reject) ...
    return Promise.resolve(`${chicken} => π₯`); // μ λ¬λ°μ κ°μ resolveνλ€. (μ½λ°±ν¨μμ μΈμλ‘ μ λ¬νλ€.)
}

function fryEgg(egg) {
    return Promise.resolve(`${egg} => π³`)
}

function getChicken() {
    return Promise.reject("μΉν¨μ κ°μ§κ³  μ¬ μ μμ.");
    //return Promise.resolve(`β=> π`);
}

async function makeFriedEgg() {
    let chicken;
    try {
        chicken = await getChicken();
    } catch (error) {
        chicken = 'π';
    }
    const egg = await fetchEgg(chicken);
    const friedEgg = await fryEgg(egg);
    return friedEgg;
}

makeFriedEgg()
.then(console.log);
