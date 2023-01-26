// 래퍼 객체 (Warpper Object)
// 원시값을 필요에 따라 관련된 빌트인 객체로 변환한다.
const number = 123;
// number 원시 타입을 감싸고 Number 객체로 감싸진다.
console.log(number.toString()); // Number 객체 타입
console.log(number); //원시 타입

const txt = 'text';
console.log(txt); // string 원시 타입
console.log(txt.length); // String 객체 타입
console.log(txt.trim());
