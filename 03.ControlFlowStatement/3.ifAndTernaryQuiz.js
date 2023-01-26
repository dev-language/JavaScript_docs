let num = 2;
// num의 숫자가 짝수이면 🤟, 홀수라면 ⭐️

// 1.조건문
if (num % 2 == 0) {
    console.log('👍🏻');
} else {
    console.log('👎🏻');
}

// 1.삼항연산자
num = 3;
num % 2 == 0 ? console.log('👍🏻') : console.log('👎🏻');

//반복되는 로그 해결
let result = num % 2 == 0 ? '👍🏻' : '👎🏻';
console.log(`결과: ${result}`);
