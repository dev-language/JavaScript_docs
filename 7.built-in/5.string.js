//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

const textObj = new String('Hello World!');
const text = 'Hello World!';

console.log(textObj); //[String: 'Hello World!']
console.log(text); //Hello World!

console.log(text[0]); //H
console.log(text[1]); //e
console.log(text.charAt(4)); //o
console.log(text.length); //12
console.log(text.indexOf('l')); //2 번째 (앞에서부터 제일 가까운것)
console.log(text.lastIndexOf('l')); //9 번째 (뒤에서부터 제일 가까운것)
console.log(text.includes('W')); //true (문자열 안에 W가 존재하는지) - 대소문자 구별
console.log(text.includes('Q')); //false (문자열 안에 Q가 존재 하지 않아 false)

console.log(text.startsWith('H')); //true (첫 시작 문자가 맞다면 true값 반환) - 대소문자 구별
console.log(text.endsWith('W')); //false (마지막 문자가 맞다면 true값 반환) - 대소문자 구별

console.log(text.toUpperCase()); //HELLO WORLD!
console.log(text.toLowerCase()); //hello world!

const space = '     span        ';
console.log(space.trim()); //공백 제거

console.log(text.substring(0, 3)); //Hel (0부터 3개 출력)
console.log(text.slice(2)); //llo world!
console.log(text.slice(-2)); //d! (뒤에서부터 2개 제거)
console.log(text.replace('l', 'o')); //Hello World!

//⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️
const longText = '안녕하세요, 서근 개발 노트 입니다.';
console.log(longText.split(' ')); //[ '안녕하세요,', '서근', '개발', '노트', '입니다.' ]
console.log(longText.split(' ', 2)); //[ '안녕하세요,', '서근' ]
console.log(longText.split(',', 2)); //[ '안녕하세요', ' 서근 개발 노트 입니다.' ]
