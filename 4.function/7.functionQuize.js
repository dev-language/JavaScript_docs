function iterate(max, action) {
    for (let i = 0; i <= max; i++) {
        action(i);
    }
}
const print = num => console.log(`print: ${num}`);
const divideAndPrint = num => console.log(`divideAndPrint: ${num / 2}`);

function printLog(num) {
    console.log(`printLog: ${num}`);
}

function multiplyAndLog(num) {
    let result = num * 2;
    console.log(`multiplyAndLog: ${result}`);
}

function divideAndLog(num) {
    console.log(`divideAndLog: ${num / 2}`);
}

iterate(3, print);
iterate(5, divideAndPrint);
iterate(3, multiplyAndLog); // 0, 2, 4, 6
iterate(5, divideAndLog); //0, 0.5, 1, 1.5, 2, 2.5

//화살표 함수를 사용해서 값을 전달하는것도 가능하다.
iterate(3, num => console.log(num * 2)); //0, 2, 4, 6
iterate(5, num => console.log(num / 2)); //0, 0.5, 1, 1.5, 2, 2.5

// 실제로 사용하는 예시
setTimeout(() => {
    console.log('1초 뒤에 이 코드가 실행 된다.');
}, 3000);

// 로더라는 클래스를 3.2초 뒤에 사라지게 해줘
// setTimeout(() => {
//     $('.loader').fadeOut(200);
// }, 3200);
