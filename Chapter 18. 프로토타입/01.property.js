const dog = {name: 'μμ°', emoji: 'πΆ'};
console.log(Object.keys(dog));
console.log(Object.values(dog));
console.log(Object.entries(dog));

console.log('name' in dog); // νΉμ  keyκ° κ°μ²΄μ μλκ°
console.log(dog.hasOwnProperty('name')); // keyκ° μλμ§ μ¬λΆ

/**
 * μλ°μ€ν¬λ¦½νΈ μμ§μ νλ‘νΌν°λ₯Ό μμ±ν  λ νλ‘νΌν°μ μνλ₯Ό λνλ΄λ νλ‘νΌν° μ΄νΈλ¦¬λ·°νΈλ₯Ό κΈ°λ³Έμ μΌλ‘ κΈ°λ³Έκ°μΌλ‘ μλ μ μνλ€.
 * - κ°, κ°μ κ°±μ  κ°λ₯ μ¬λΆ, μ΄κ±° κ°λ₯ μ¬λΆ, μ¬μ μ κ°λ₯ μ¬λΆ
 * - νλ‘νΌν° μ΄νΈλ¦¬λ·°νΈλ μλ°μ€ν¬λ¦½νΈ μμ§μ΄ κ΄λ¦¬νλ λ΄λΆ μ¬λ‘―μ μνκ°μ μμΉν΄μλ€. λ°λΌμ μ§μ  μ κ·Όν  μ μμ§λ§,
 * Object.getOwnPropertyDescriptors(...), Object.getOwnPropertyDescriptor(...)μ ν΅ν΄ κ°μ μ μΌλ‘ νμΈν  γ γμλ€.
 *
 *
 */
const descriptors = Object.getOwnPropertyDescriptors(dog); // κ°μ²΄μ λͺ¨λ  ν€μ λν νλ‘νΌν° λμ€ν¬λ¦½ν°λ€
console.log(descriptors);

const des = Object.getOwnPropertyDescriptor(dog, 'name'); // μνλ ν€μ νλ‘νΌν° λμ€ν¬λ¦½ν°
console.log(des);

// νλ‘νΌν° μ μ
Object.defineProperty(dog, 'name', {
    value: 'λ©λ©', // μμ±κ°
    writable: false, // ν λΉ μ°μ°μλ‘ μμ±κ°μ λ³κ²½ λΆκ°λ₯ν μ§
    enumerable: false, // κ°μ²΄μ μμ± λ°λ³΅ μ΄κ±° μ λΈμΆλλ μ§ μ¬λΆ
    configurable: false // μμ±μ κ°μ λ³κ²½ν  μ μκ³ , κ°μ²΄μμ μ­μ ν  μλ μλ μ§ μ¬λΆ
});
console.log(dog.name); // μ΄λ¦μ΄ λ³κ²½λ¨
console.log(Object.keys(dog)); // 'emoji'λ§ λΈμΆλ¨
console.log(Object.values(dog));
console.log(Object.entries(dog));

delete dog.name;
console.log(dog.name); // configurable νμ§ μμΌλ―λ‘,   μ¬μ ν λ¨μμμ.

const student = {};
Object.defineProperties(student, {
    firstName: {
        value: 'μν¬',
        writable: true,
        enumerable: true,
        configurable: true,
    },
    lastName: {
        value: 'κΉ',
        writable: true,
        enumerable: true,
        configurable: true,
    },
    fullName: {
        get() {
            return `${this.lastName} ${this.firstName}`;

        },
        set(name) {
            [this.lastName, this.firstName] = name.split(' ');
        },
        configurable: true,
    }
});
console.log(student);
console.log(student.fullName);
student.fullName = 'λΆκ½ λμ₯';
console.log(student);
