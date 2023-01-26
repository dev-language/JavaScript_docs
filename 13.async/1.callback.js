'use strict';

// 자바스크립트는 동기적인 아이 이다.
// 호이스팅이 된 이후부터 코드가 작성한 순서부터 동기적으로 실행 된다.
// 호이스팅 : var변수와 function 선언들이 자동적으로 제일 위로 올리가는것.

// 동기 synchronous : 정해진 순서에 맞게 코드가 실행되는것
// 비동기 asynchronous : 언제 코드가 실행될지 예측할 수 없는것.
console.log('1');

// 비동기 (브라우저 API)
setTimeout(() => {
    console.log('2');
}, 1000); // 이것이 콜백 함수

console.log('3');

// 콜백도 두가지로 나눠진다.

/*===Synchronous callback*/
//이 함수는 호이스팅되어 제일 위에 선언됨.
function printImmdeiately(print) {
    print();
}
printImmdeiately(() => console.log('hello'));

/*===Asynchronous callback*/
//이 함수는 호이스팅되어 제일 위에 선언 됨.
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);

/*⭐️⭐️⭐️⭐️⭐️ 실행 순서*/

/*
console.log('1'); // 동기
setTimeout(() => {console.log('2');}, 1000); //비동기
console.log('3'); //동기
printImmdeiately(() => console.log('hello')); //동기
printWithDelay(() => console.log('async callback'), 2000); //비동기
*/
