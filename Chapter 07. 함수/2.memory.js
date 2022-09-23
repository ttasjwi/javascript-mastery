function add(a, b) {
    return a + b;
}

const sum = add; // add:0x11, sum:0x11;
console.log(sum(1, 2));
console.log(add( 1,2));
