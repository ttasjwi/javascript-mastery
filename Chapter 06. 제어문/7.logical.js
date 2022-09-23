
// && 그리고
// || 또는
// ! 부정(단항 연산자에서 온 것)
// !! 불리언값으로 변환(단항 연산자 응용 버전)
let num = 8;

if (num >= 0 && num <9) {
    console.log('굿굿');
}

if (num >0 || num >=20) {
    console.log('굿굿굿');
}

if (!(num>0 || num >=20)) {
    console.log('우웩');
}

if (num!=9) {
    console.log('굿굿굿굿')
}

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
console.log()

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
