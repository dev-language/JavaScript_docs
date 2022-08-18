// 논리 연산자 Logical operator
// ⭐️ && 그리고
// ⭐️ || 또는
// ⭐️ ! 부정(단항연산자)
// !! 불리언 값으로 변환

// '&&' num이 0보다 크거나 같고, 20보다 클때 실행
let num = 31;
if (num >= 0 && num > 20) {
    console.log(`${num} 🤟`);
} else {
    console.log(`조건에 맞지 않습니다.`);
} //31 🤟

// '||' num이 3보다 작거나, 20보다 클때 실행
num = 2;
if (num < 3 || num > 20) {
    console.log(`${num} 🤟`);
} else {
    console.log(`조건에 맞지 않습니다.`);
} //2 🤟

num = 10;
if (num < 3 || num > 20) {
    console.log(`${num} 🤟`);
} else {
    console.log(`조건에 맞지 않습니다.`);
} // 조건에 맞지 않습니다.

// '!' num이 10이 아니면 실행
num = 11;
if (num != 10) {
    console.log(`${num} 🤟`);
} else {
    console.log(`조건에 맞지 않습니다.`);
} // 11 🤟

console.clear();
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false

console.clear();
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

console.clear();
console.log(!'text'); //false
console.log(!!'text'); //true
