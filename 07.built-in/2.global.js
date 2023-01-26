//전역적으로 사용 가능한 글로벌 객체
console.log(globalThis);
console.log(Infinity);
console.log(NaN);
console.log(null);
console.log(undefined);

// Node에서의 THIS : 현재 모듈에 있는 정보를 출력한다.
// JS에서는 대체적으로 전역객체를 가르킴
console.log(this);

/*=====함수 속성======*/
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference#%ED%95%A8%EC%88%98_%EC%86%8D%EC%84%B1

// eval: 문자열 형태로 자바스크립트 코드를 작성하면 이것을 평가해 값으로 출력 가능하다.
eval('const num = 2; console.log(num)'); //2

// isFinite: 숫자가 유한한지 아닌지를 반펼할 수 있는 내장객체
console.log(isFinite(1)); //true
console.log(isFinite(Infinity)); //false

// parseInt: 문자열 안에 있는 숫자를 정수로 변환해줌 (실수를 정수로)
console.log(parseInt('42.22')); //42
// parseFloat: 문자열 이긴하지만 그안에 숫자가 있다면 정수로 바꿔줌
console.log(parseFloat('42.22')); //42.22

// URL (URL, Uniform Resource Indentifier 개념)
// 아스키 문자로만 구성되어야 한다.
// 한글이나 특수문자는 이스케이프 처리 해야 한다.
const URL = 'https://한글URL.com';
const encoded = encodeURI(URL); //이스케이프 처리
console.log(encoded); //https://%ED%95%9C%EA%B8%80URL.com

const decoded = decodeURI(encoded);
console.log(decoded); //https://한글URL.com

// 전체 URL이 아닌 부분적인 것은 컴포넌트를 사용
const part = '한글URL.com';
console.log(encodeURIComponent(part)); //%ED%95%9C%EA%B8%80URL.com
