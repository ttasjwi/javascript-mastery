class Worker {
    #name;
    #part;
    #workTime;
    #hourly_wage;

    constructor(name, part, workTime, hourly_wage) {
        this.#name = name;
        this.#part = part;
        this.#workTime = workTime;
        this.#hourly_wage = hourly_wage;
    }

    get name() {
        return this.#name;
    }

    get part() {
        return this.#part;
    }

    get workTime() {
        return this.#workTime;
    }

    get hourlyWage() {
        return this.#hourly_wage;
    }

    get pay() {
        return this.#workTime * this.#hourly_wage;
    }
}

class RegularWorker extends Worker {

    static #HOURLY_WAGE = 10000;

    constructor(name, part, workTime) {
        super(name, part, workTime, RegularWorker.#HOURLY_WAGE);
    }
}

class PartTimeWorker extends Worker {
    static #HOURLY_WAGE = 8000;

    constructor(name, part, workTime) {
        super(name, part, workTime, PartTimeWorker.#HOURLY_WAGE);
    }
}

const regularWorker = new RegularWorker('정직원1', '전기실', 40);
const partTimeWorker = new PartTimeWorker('파트타임직원1', '전기실', 60);
console.log(regularWorker.pay);
console.log(partTimeWorker.pay);
