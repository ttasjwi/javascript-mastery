// 0부터 9까지 순회하며 2배값을 반환하는 이터레이터(반복자) 만들기!

const multiple = {

    [Symbol.iterator]() {
        const [start, end] = [0, 9];
        let cursor = start;

        return {
            next() {
                return {value: cursor * 2, done:cursor++ > end};
            }
        };
    }
};

for (const num of multiple) {
    console.log(num);
}
