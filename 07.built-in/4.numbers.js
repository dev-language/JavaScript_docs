//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

const num1 = 123;
const num2 = new Number(123);

console.log(typeof num1); //number 원시 타입
console.log(typeof num2); //object 객체 타입

console.log(Number.MAX_VALUE); //정수에서 쓸수 있는 최고의 값 (불안정)
console.log(Number.MIN_VALUE); //정수에서 쓸수 있는 최소의 값 (불안정)
console.log(Number.MAX_SAFE_INTEGER); //정수에서 쓸수 있는 최고의 값 (안정)
console.log(Number.MIN_SAFE_INTEGER); //정수에서 쓸수 있는 최소의 값 (안정)
console.log(Number.NaN); //정수가 NaN인지 확인
console.log(Number.POSITIVE_INFINITY); //정수의 최대값
console.log(Number.NEGATIVE_INFINITY); //정수의 최소값

// 언제 사용하는가?
if (num1 < Number.MAX_SAFE_INTEGER) {
    console.log(`${num1}이 정수에서 쓸 수 있는 최고값 보다 작습니다.`);
}

if (Number.isNaN(num1) == false) {
    console.log(`${num1}은 정수 입니다.`);
} else {
    console.log(`${num1}은 숫자가 아닙니다`);
}

// 지수표기법 (매우 크거나 작은 숫자를 표기할 때 사용, 10의 n승으로 표기)
const num3 = 102;
console.log(num3.toExponential()); //1.02e+2

// 반올림 하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed()); //'1234'
console.log(num4.toString()); //'1234.12'
console.log(parseInt(num4)); //1234
console.log(parseFloat(num4)); //1234.12

console.log(num4.toLocaleString('zh-Hans-CN-u-nu-hanidec')); //一,二三四.一二
console.log(num4.toLocaleString('ko-KR', { style: 'currency', currency: 'KRW' })); //₩1,234

//원하는 자릿수 까지 유효하도록 반올림
console.log(num4.toPrecision(2)); //'1.2e+3' 지수형식으로 자동 변환
console.log(num4.toPrecision(5)); //1234.1

if (Number.EPSILON > 0 && Number.EPSILON < 1) {
    console.log(Number.EPSILON); //0과 1사이에서 나타낼 수 있는 가장 작은 숫자.
}

const num5 = 0.1 + 0.2 - 0.2;
console.log(num5); //0.10000000000000003   JS에서 2진수로 변경하면서 계산을 해서 작은 오차가 생길 수 있다.

let isEqual = (original, expected) => {
    //Math,abs() 으로 값이 -가 되지 않도록 해준다.
    return Math.abs(original - expected) < Number.EPSILON; //값이 미묘한 차이로 똑같다면 이런식으로 표현할 수 있다.
};
console.log(isEqual(num5, 0.1)); //true;
