// 함수에서 리턴값을 정해주지 않으면 코드상에서 자동으로 undefined이 반환된다.

function add(a, b) {
    // return a + b;
}

const result = add(1, 2);
console.log(result); //undefined

// 그렇기 때문에 return이 필요없는 경우엔 return 키워드를 작성할 필요가 없다.
function print(text) {
    console.log(text);
}

print('안녕하세요'); //안녕하세요

// 언제 활용할까?
// 사용예 : 조건이 맞지 않을 때 함수 도입부분에서 함수를 일찍 종료시킴
// return == return undefined

// 함수 내에서 조건문을 적용해보자
// num이 12보다 크고 100보다 작거나 같으면 출력하지 않고
// 그 외 값을 출력한다.
// 즉, return을 사용하면 원하는 조건이 아닐때 함수를 일찍 종료시킨다.

function printNumber(num) {
    if (num > 12 && num <= 100) {
        return; // undefined
    }
    console.log(num);
}

printNumber(101); //101
printNumber(99); //출력 안됨 (조건이 맞지 않아서 함수를 일찍 종료시켰음)
