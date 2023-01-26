//! while(조건) {}
// 조건이 false가 될때까지 { } 코드를 반복함
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/while

let num = 5;
while (num >= 0) {
    console.log(num);
    num--;
    if (num === 0) {
        console.log(` ${num}: num이 0에 도달했습니다.`);
    }
}

console.clear();

let isActive = true;
let i = 0;
while (isActive) {
    console.log(` ${i}: 활성화 됨`);
    if (i === 12) {
        break;
    }
    i++;
}

console.clear();

// 마찬가지로 break와 continue 사용 가능
// continue: 이번 순간에만 멈추고 다음으로 넘어가고 싶을때

//! do {} while() {} 조건문
// while은 조건이 맞을 때 사용 한다.
// do는 일단 먼저 실행 후, 조건을 확인한다.
// 꼭 한번은 사용해야 한다면 do {} while() {}을 사용할 수 있다.
isActive = false;
do {
    console.log('do-while 조건문 실행');
} while (isActive); // isActive가 false 인데도 실행이 되었다.

while (isActive) {
    console.log('while 조건문 실행');
} // while 조건문에서는 isActive가 false 이기 때문에 실행이 안된다.
