function fetchEgg(chicken) {
    // return new Promise((resolve, reject) ...
    return Promise.resolve(`${chicken} => π₯`); // μ λ¬λ°μ κ°μ resolveνλ€. (μ½λ°±ν¨μμ μΈμλ‘ μ λ¬νλ€.)
}

function fryEgg(egg) {
    return Promise.resolve(`${egg} => π³`)
}

function getChicken() {
    return Promise.reject("μΉν¨μ κ°μ§κ³  μ¬ μ μμ.");
    // return Promise.resolve(`β=> π`);
}

getChicken()
    .catch(error => {
        console.log(error.name);
        return 'π';
    })
    .then(fetchEgg)
    .then(fryEgg)
    .then(console.log)
