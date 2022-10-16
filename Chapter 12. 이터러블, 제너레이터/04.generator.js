// // 이터레이터로 이터러블 만들기
// const multiple = {
//
//     [Symbol.iterator]() {
//         const [start, end] = [0, 9];
//         let cursor = start;
//
//         return {
//             next() {
//                 return {value: cursor * 2, done:cursor++ > end};
//             }
//         };
//     }
// };


// 제너레이터로 이터러블 만들기 : function*\
// 실제로는 제너레이터, 이터레이터를 구현할 일은 거의 없을 듯.

function* multipleGenerator() {
    try {
        for (let i=0; i< 10; i++) {
            console.log(i);
            yield i * 2;
            // next를 호출할 때까지 멈춤.
        }
    } catch (error) {
        console.log(error);
    }

}

const multiple = multipleGenerator();
let next = multiple.next();
console.log(`value = ${next.value}, done = ${next.done}`);

// multiple.return(); // 제너레이터를 종료시킴
multiple.throw('Error!') // 제너레이터에 예외를 던짐 => 잡아 처리하지 않으면 아래 코드가 실행되지 않음

console.log('으악');

next = multiple.next();
console.log(`value = ${next.value}, done = ${next.done}`);
