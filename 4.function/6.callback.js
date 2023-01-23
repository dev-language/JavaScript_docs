// 콜백함수

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// action은 외부로 부터 주어지는 함수 즉 콜백 함수라고 한다.

//즉, a와 b는 num으로 가져오 되, action 부분에는 변수 함수로 정해준 이름을 넣어주면 된다.
//이것이 콜백함수의 형태이다. (호출 하지 않고주소만 받아옴)
function calculator(a, b, action) {
    let result = action(a, b);
    console.log(result);
    return result;
}

// 전달된 action은 콜백함수라 함.
// 전달될 당시에 함수를 바로 호출해서 반환된 값을 전달하는것이 아닌 함수를 가리키고 있는 함수의 래퍼런스(참조값)가 전달된다.
// 그렇기에 함수는 고차함수 안에서 필요한 순간에 호출이 나중에 된다.
calculator(3, 2, multiply); //6
calculator(1, 3, add); //4
calculator(10, 2, divide); //5

console.clear();

// 함수내부에서는 정의하는 시점에 action 즉 콜백함수 부분에 어떤 값이 올지 모른다.

function calculate2(a, b, action) {
    if (a < 0 || b < 0) {
        console.log('ERROR: 인자 값이 0보다 작음');
        return; // return undefined
    }
    let result = action(a, b);
    console.log(result);
}

// 함수의 래퍼런스를 받아서 필요한 순간에 호출하기 때문에 조건에 맞지 않는다면 영원히 호출되지 않는다.
calculate2(3, 2, multiply);
calculate2(-1, 0, add);
