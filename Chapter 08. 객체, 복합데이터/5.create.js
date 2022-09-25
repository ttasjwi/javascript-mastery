// const apple = {
//     name: 'apple',
//     color: 'red',
//     display: function() {
//         console.log(`${this.name}: ${this.color}`);
//     },
// };
//
// const banana = {
//     name: 'banana',
//     color: 'yello',
//     display: function() {
//         console.log(`${this.name}: ${this.color}`);
//     },
// };

// 생성자 함수

function Fruit(name, color) {
    this.name = name;
    this.color = color;
    this.display = () => {
        console.log(`${this.name}: ${this.color}`);
    };
    //return this; // 생략 가능
};

const apple = new Fruit("apple", "red");
const banana = new Fruit("banana", "yellow");

console.log(apple);
console.log(apple.name);
console.log(apple.color);
apple.display();
console.log();

console.log(banana);
console.log(banana.name);
console.log(banana.color);
banana.display();
