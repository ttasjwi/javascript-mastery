
// 객체 축약
const x = 0;
const y = 0;

// const coordinate = {x:x, y:y};
const coordinate = {x, y}; // 축약표기법
console.log(coordinate);

function makeObj(name, age) {
    return {
        name,
        age,
    };
}
