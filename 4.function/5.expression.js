// 함수 선언문 : function name() {}

/**  함수 표현식 : const name = fun≠≠ction() {} */
let add = function (a, b) {
    return a + b;
};
console.log(add(1, 2)); //3

/** 화살표 함수 const name = () => {} */
add = (a, b) => {
    return a + b;
};
console.log(add(1, 2));

/**  별다른 일을 하지않고 어떤 값응 바로 리턴하는 경우엔 화살표와 대괄호 모두 생략 가능하다*/
let sum = (a, b) => a + b;

console.log(sum(1, 2)); //3

/** 생성자 함수 const object = new Function();  객체편에서 다룸*/

/** IIFE(Immediately-Invoked Function Expressions) 함수를 정의하면서 바로 호출하고 싶을때 사용한다. */
// 많이 사용 되지는 않음
(function hello() {
    console.log('안녕!');
})();
