class Counter {
    constructor(runEveryFiveTimes) {
        this.counter = 0;
        this.callback = runEveryFiveTimes;
    }

    increase() {
        this.counter++;
        console.log(this.counter);
        if (this.counter % 5 === 0) {
            this.callback && this.callback(this.counter);
        }
    }
}
// class는 다양한 object를 만들기 위한 청사진

function printSomething(num) {
    console.log(`yo! ${num}`);
}
function alertNum(num) {
    alert(`WoW! ${num}`);
}
// const coolCounter = new Counter(printSomething); // new를 연산자를 이용해 class를 만들게 되면 constructor가 실행됨
// const coolCounter = new Counter(alertNum);

const coolCounter = new Counter(); // counter에 callback을 아무것도 할당 안했을 때는 callback이 undefined이 됨

coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();

coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
