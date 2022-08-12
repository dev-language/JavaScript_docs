///단항 연산자 (Unary operators)

// + (양) +1
// - (음) -1
// ! (부정)

// 1. 양/음 단항 연산자
let a = 10;
a = -a; // -1 * 10
console.log(a); // -10

a = +a; //+(-10)
console.log(a); //  -10

a = -a; //-(-10)
console.log(a); // 10

// 2. 부정 연산자
let boolean = false;
console.log(boolean); //false
console.log(!boolean); //true
console.log(!!boolean); //false

console.clear();

// + 숫자가 아닌 타입을 숫자로 변환하면?
console.log(+false); // 0
console.log(+''); // 0
console.log(+null); // 0
console.log(+true); // 1
console.log(+undefined); // NaN
console.log(+'string'); // NaN 문자열은 숫자로 변환할 수 없기에 NaN
console.log(+Symbol); // NaN

console.log('텍스트1:', !'텍스트'); //불리언이 아닌 값에 부정을 한 번 만하면 fasle
console.log('텍스트2:', !!'텍스트'); //불리언이 아닌 값을 불리언으로 만들어 주려면 부정을 두 번 하면 된다 true
