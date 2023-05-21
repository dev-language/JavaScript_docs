/**
* 배열 메소드 종류

1. push(): 뒤에 삽입
2. pop(): 뒤에 삭제
3. unshift(): 앞에 삽입
4. shift(): 앞에 삭제

5. splice(n, m, x): n부터 m개 지움
6. slice(n, m): n부터 m까지 지움
7. concat(arr2, arr3): 합쳐서 새배열 반환
8. forEach((item, index, arr) => { } ): 배열 반복
9. indexOf(n, m): 요소의 인덱스를 찾아 반환
10. includes(): 배열에 해당 값이 포함 되었는지 boolean 확인
11. find(fn): 요소 찾기
12. filter(fn): 만족하는 모든 요소를 배열로 반환
13. reverse(): 역순으로 재정렬
14. map((item, index, fn) => { }) : 함수를 받아 특정 기능을 시행하고 새로운 배열을 반환
15. join(): 배열을 합쳐 문자열로 반환, split(): 문자열을 특정한 값으로 나눠 배열로 반환
16. Array.isArray(): 배열인지 아닌지를 반환
*/

let arr1 = [];
arr1.push(1); // [1]
arr1.push(2); // [1, 2]
arr1.pop(); // 2를 제거하고 반환 -> [1]
arr1.pop(); // 1을 제거하고 반환 -> []

let arr2 = [];
arr2.unshift(1); // [1]
arr2.unshift(2); // [2, 1]
arr2.shift(); // 2를 제거하고 반환 -> [1]
arr2.shift(); // 1을 제거하고 반환 -> []

let arr3 = [];
arr3.push(1); // [1]
arr3.unshift(2); // [2, 1]
arr3.pop(); // 1을 제거하고 반환 -> [2]

/* ======= 5. splice ======= */

/**
*
splice는 삭제된 요소를 반환한다.
1. splice(시작, 개수)
2. splice(시작, 개수, 추가)
*/

let splice1 = ['선중', '미진', '희진', '시욱'];
splice1.splice(2, 2);
console.log('splice1 --->', splice1); // [ '선중', '미진' ]

let splice2 = ['선중', '미진', '희진', '시욱'];
splice2.splice(2, 2, '추가1', '추가2');
console.log('splice2 --->', splice2); // [ '선중', '미진', '추가1', '추가2' ]

let splice3 = ['선중', '미진', '희진', '시욱'];
splice3.splice(2, 0, '추가');
console.log('splice3 --->', splice3); // [ '선중', '미진', '추가', '희진', '시욱' ]

let splice4 = [1, 2, 3];
let splice4_result = splice4.splice(0, 1);
console.log('splice4_result --->', splice4_result); // [1] ---> 삭제된 요소 반환
console.log('splice4 --->', splice4); // [2, 3]

/* ======= 6. slice ======= */

/**
*
slice(n 부터, m 전 까지)
- slice() 메서드는 배열에서 원하는 부분을 추출하여 새로운 배열로 반환하는데 사용됩니다.
- slice() 메서드는 원본 배열을 변경하지 않고 원하는 부분을 선택적으로 가져올 수 있습니다.
*/

let slice1 = ['선중', '미진', '희진', '시욱'];
let slice1_result = slice1.slice(1, 2);
console.log('slice1 --->', slice1); // [ '선중', '미진', '희진', '시욱' ]
console.log('slice1_result --->', slice1_result); // [ '미진' ]

/* ======= 7. concat ======= */

/**
*
concat(arr2, arr3): 합쳐서 새배열 반환
*/

let concat1 = ['선중', '미진'];
let concat1_result = concat1.concat(['추가1', '추가2']);
console.log('concat1_result --->', concat1_result); // [ '선중', '미진', '추가1', '추가2' ]

/* ======= 8. forEach ======= */

/**
*
forEach((item, index, arr) => { } ): 배열 반복
item - 요소
index
arr - 배열 자체
*/

let forEach1 = ['선중', '미진', '희진'];
let forEach1_result = [];
forEach1.forEach((v, i) => {
  forEach1_result.push(`[${i}]. ${v}`);
});

console.log('forEach1_result --->', forEach1_result); // [ '[0]. 선중', '[1]. 미진', '[2]. 희진' ]

/* ======= 9. indexOf ======= */

/**
*
1. indexOf(n, m): 요소의 인덱스를 찾아 반환
 ㄴ 요소가 있으면 해당 index 반환. 없으면 -1 반환

2. lastIndexOf(n): 요소의 마지막에서부터 찾아 반환
*/

let indexOf1 = ['선중', '미진', '희진', '선중', '시욱', '선중'];
let indexOf1_result1 = indexOf1.indexOf('선중');
let indexOf1_result2 = indexOf1.indexOf('선중', 4); // 4번째 이후 부터 찾아라
let lastIndexOf = indexOf1.lastIndexOf('선중');
console.log('indexOf1_result1 --->', indexOf1_result1); // 0
console.log('indexOf1_result2 --->', indexOf1_result2); // 5
console.log('lastIndexOf --->', lastIndexOf); //5

/* ======= 10. includes ======= */

/**
*
includes(): 배열에 해당 값이 포함 되었는지 boolean 확인
*/

let includes1 = ['선중', '미진', '희진'];
let includes1_result = includes1.includes('선중');
console.log('includes1_result --->', includes1_result); // true

/* ======= 11. find / findIndex ======= */

/**
*
1. find(fn):
2. findIndex(n)
*/

let userList = [
  { name: '선중', introduce: '안녕하세요 제 이름은 선중 입니다.', age: 28 },
  { name: '미진', introduce: 'hi my name is Mijin', age: 15 },
  { name: '희진', introduce: 'привет! я Хиджин', age: 31 },
];
let find_result1 = [];

userList.find(user => {
  if (user.age > 15) {
    find_result1.push(user.name);
  }
});

let find_result2 = userList.find(user => {
  if (user.introduce.includes('привет')) {
    return true;
  }
  return false;
});

let findIndex_result = userList.findIndex(user => {
  if (user.introduce.includes('hi')) {
    return true;
  }
});

console.log(`성인: ${find_result1}`); // 성인: 선중,희진
console.log(find_result2); // { name: '희진', introduce: 'привет! я Хиджин', age: 31 }
console.log('findIndex_result --->', findIndex_result); // 1

/* ======= 12. filter ======= */

/**
*
filter(fn): 만족하는 모든 요소를 배열로 반환
*/

let user_filter = userList.filter(user => {
  if (user.age > 16) return true;
  else return false;
});

console.log('user_filter --->', user_filter);
/* [
  { name: '선중', introduce: '안녕하세요 제 이름은 선중 입니다.', age: 28 },
  { name: '희진', introduce: 'привет! я Хиджин', age: 31 }
] */

/* ======= 13. reverse ======= */

/**
*
reverse(): 역순으로 재정렬
*/

let reverse = [1, 2, 3, 4, 5];
reverse.reverse();
console.log('reverse --->', reverse); // [ 5, 4, 3, 2, 1 ]

/* ======= 15. map ======= */

/**
*
map((item, index, fn) => { }) : 함수를 받아 특정 기능을 시행하고 새로운 배열을 반환
*/

let newUserList = userList.map((item, index) => {
  return Object.assign({}, item, {
    id: index + 1,
    isForeigner: !item.introduce.includes('안녕'),
  });
});

console.log('newUserList --->', newUserList);

/* [
  {
    name: '선중',
    introduce: '안녕하세요 제 이름은 선중 입니다.',
    age: 28,
    id: 1,
    isForeigner: false
  },
  {
    name: '미진',
    introduce: 'hi my name is Mijin',
    age: 15,
    id: 2,
    isForeigner: true
  },
  {
    name: '희진',
    introduce: 'привет! я Хиджин',
    age: 31,
    id: 3,
    isForeigner: true
  }
] */

/* ======= 15. join, split ======= */

/**
*
1. join(): 배열을 합쳐 문자열로 반환
2. split(): 문자열을 특정한 값으로 나눠 배열로 반환
*/

let join = ['안녕', '하세', '요'];
let join_result = join.join('');

console.log('join_result --->', join_result); // 안녕하세요

let split = '안녕하세요 제 이름은 선중 입니다.';
let split_result = split.split(' ');
console.log('split_result --->', split_result); // [ '안녕하세요', '제', '이름은', '선중', '입니다.' ]

/* ======= 16. Array.isArray() ======= */

/**
*
Array.isArray(): 배열인지 아닌지를 반환
*/

const someObject = {
  name: '선중',
  age: 28,
};

const someArray = [1, 2, 3];

console.log('typeOf --->', typeof someObject); // object
console.log('typeOf --->', typeof someArray); // object

console.log('Array.isArray() --->', Array.isArray(someObject)); // false
console.log('Array.isArray() --->', Array.isArray(someArray)); // true
