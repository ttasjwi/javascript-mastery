function loop() {
    const array = [];

    // var과 let의 차이점
    var i;
    // for (var i=0; i<5; i++) {
    for (i=0; i<5; i++) { // i가 var이면 i의 스코프는 함수 블록이다.
        array.push(function() {
            console.log(i);
        });
    }
    return array;
}

const array = loop();
array.forEach(func => func());
console.log();
