/**
 * 이터러블 만들기 -함수로 만들어, 재사용 가능하게 하기
 */
const makeIterator = (minNumber, maxNumber, callback) => {
    let num = minNumber;
    return {
        [Symbol.iterator]: () => {
            return {
                next() {
                    return {value:callback(num), done:num++ > maxNumber};
                }
            }
        }
    }
}

const iterator = makeIterator(0, 9, num => num * 2);

for (const num of iterator) {
    console.log(num);
}
