// 매개변수의 기본값은 undefined
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장이 된다.

function sum(a, b) {
    console.log(a);
    console.log(b);
    console.log(arguments);
    return a + b;
}

console.log(sum(1, 2));
console.clear();

// 매개변수로 기본값을 넣어줄 수 있다.
function sum2(a = 1, b = 2) {
    return a + b;
}
sum2(); //3
console.clear();

// Rest 매개변수
// 몇개의 인자를 받아 올지 모를때 사용한다.
function sum3(...numbers) {
    console.log(numbers);
}
sum3(1, 2, 3, 4, 5);
console.clear();
// ...numbers 앞에 a, b, c와 같이 인자를 넣어주면 이를 제외한 값을 출력한다.
function sum4(a, b, c, ...numbers) {
    console.log(a); //1
    console.log(b); //2
    console.log(c); //3
    console.log(numbers);
    [4, 5];
}
sum4(1, 2, 3, 4, 5); //4, 5
