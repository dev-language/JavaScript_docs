//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

//Math
//static properties, methods

console.log(Math.E); // 오일러의 상수, 자연로그의 밑에서 사용하는 값
console.log(Math.PI); // 원주율 PT값

// static methods
console.log(Math.abs(-10)); //10 (절대값을 만들 수 있다.)
// 소수점 이하를 올림
console.log(Math.ceil(10.5)); //11
// 소수점 이하를 내림
console.log(Math.floor(10.5)); //10
// 소수점 이하를 반올림
console.log(Math.round(10.3)); //10
console.log(Math.round(10.8)); //11
// 정수만 반환
console.log(Math.trunc(10.3)); //10

/*=====⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️*/
// 최대, 최솟값 찾기
console.log(Math.max(1, 2, 6)); //6
console.log(Math.min(1, 2, 6)); //1
// 거듭 제곱
console.log(Math.pow(2, 3)); //8
// 제곱근
console.log(Math.sqrt(9)); //3*3 고로 3

//⭐️ 랜덤한 값을 반환
console.log(Math.random()); // 0.0 ~ 1.0

//⭐️ 1~10
console.log(Math.floor(Math.random() * 10 + 1)); // 1 ~ 10);
