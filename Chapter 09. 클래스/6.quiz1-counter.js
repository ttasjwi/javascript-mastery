// 요구사항
// 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터 만들기

class Counter {
    #count

    constructor(startCount = 0) {
        this.#validateStartCount(startCount);
        this.#count = startCount
    }

    #validateStartCount(startCount) {
        if (typeof(startCount) != 'number') {
            throw TypeError('시작 카운트가 숫자가 아닙니다.')
        }

        if (!Number.isInteger(startCount)) {
            throw TypeError("정수만 시작 카운트로 쓸 수 있어요.")
        }
        if (startCount < 0) {
            throw RangeError("0 미만은 시작 카운트로 쓸 수 없어요")
        }
    }

    increment() {
        this.#count++;
    }

    get count() {
        return this.#count;
    }

}

const counter = new Counter();
counter.increment();
counter.increment();
console.log(counter.count);
