// 카운터 만들기
// 0 이상으로 값을 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터 만들기.

class Counter {
    #value;
    constructor(startValue) {
        if (isNaN(this.startValue) || this.startValue < 0) {
            this.#value = 0;
        } else {
            this.#value = startValue;
        }
    }
    get value() {
        return this.#value;
    }
    increment = () => {
        return this.#value++;
    };
}

const counter = new Counter(0);
counter.increment();
counter.increment();
console.log(counter.value);
