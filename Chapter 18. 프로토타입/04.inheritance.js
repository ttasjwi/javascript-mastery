
// 프로토 타입을 기반으로 한 객체지향 프로그래밍
function Animal(name, emoji) {
    this.name = name;
    this.emoji = emoji;

}
Animal.prototype.printName = function() {
    console.log(`${this.name} ${this.emoji}`);
};

function Dog(name, emoji, owner) {
    //super(name, emoji);
    Animal.call(this, name, emoji);
    this.owner = owner;
};

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.play = () => {
    console.log("같이 놀자옹!");
}
const dog1 = new Dog('멍멍', '🐶', '땃쥐');
dog1.play();
dog1.printName();
console.log();

function Tiger(name, emoji) {
    Animal.call(this, name, emoji);
}
Tiger.prototype = Object.create(Animal.prototype);
Tiger.prototype.hunt = () => {
    console.log('사냥하자...!');
}

const tiger1 = new Tiger('어흥', '🐯');
tiger1.printName();
tiger1.hunt();

console.log(dog1 instanceof Dog); // 어떤 클래스를 상속하는지, 어떤 프로토 타입을 따르는 지
console.log(dog1 instanceof Animal);
console.log(dog1 instanceof Tiger); // false
console.log();

console.log(tiger1 instanceof Dog);
console.log(tiger1 instanceof Animal);
console.log(tiger1 instanceof Tiger);
