/**
* 구조분해할당

1. 배열 구조 분해 할당
  ㄴ 01) let [1, 2, 3] = array
  ㄴ 02) let [1="하나", 2="둘", 3="셋"] = array : 기본값 설정 가능
  ㄴ 03) let [김, , 강, 우] = array4; : 일부 반환값 무시
  ㄴ 04) 배열 구조 분해 바꿔치기
2. 객체 구조 분해 할당
*/

/* ======= 배열 구조 분해 할당 ======= */

let array1 = ['선중', '미진', '희진'];
const [seogun, mijin, heejin] = array1;
console.log('seogun --->', seogun); // 선중

let array2 = '선중-미진-희진-시욱';
const [선중, 미진, 희진, 시욱] = array2.split('-');
console.log('시욱 --->', 시욱); // 시욱

let array3 = ['하나', '둘', '셋'];
const [일, 이, 삼, 사 = '넷'] = array3;
console.log('사 --->', 사); // 넷

let array4 = ['kim', 'lee', 'kang', 'woo'];
const [김, , 강, 우] = array4;
console.log('강 --->', 강);

let array5 = [1, 2, 3, 4, 5, 6];
const [num1, num2, num3, ...rest] = array5;
console.log('rest --->', rest); // [ 4, 5, 6 ]

let array_a = 1;
let array_b = 2;
const [a, b] = [array_b, array_a];
console.log('a --->', a); // 2

/* ======= 객체 구조 분해 할당 ======= */

let user = { name: '선중', age: 28, location: { city: '대전', town: '???' } };
const {
  name,
  age,
  location: { city, town },
} = user;
console.log('town --->', town); // ???

//새로운 변수명으로 변경 가능

const {
  name: myName,
  age: myAge,
  location: { city: myCity, town: myTown },
} = user;
console.log('myCity --->', myCity);
