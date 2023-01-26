# 빌트인 내장 객체

[한국어 버전 참고서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference) ![CleanShot 2023-01-24 at 09 02 33](https://user-images.githubusercontent.com/76584961/214181418-0422d3cb-fa96-45f4-92e4-382197259080.png)

## 1. 래퍼 객체 (Warpper Object)

원시값을 필요에따라 관련된 빌트인 객체로 변환할 수 있다. 만약 단순히 원시값을 넣어주고, 만들어진 변수에 `.`을 입력하고 내장 객체를 확인해보면 다양한 메서드가 나타나는데, 바로 이것을 사용하면 원시타입에서 객체 타입으로 바뀌게 된다. 그리고 `.`을 해제 하는 순간 다시 원시타입으로 돌아간다.

```javascript
const number = 123;

// number 원시 타입을 감싸고 Number 객체로 감싸진다.
console.log(number.toString()); // Number 객체 타입
console.log(number); //원시 타입
```

## 2. 글로벌 객체

전역에서 사용 가능한 글로벌 객체.

```javascript
//전역적으로 사용 가능한 글로벌 객체
console.log(globalThis);
console.log(Infinity);
console.log(NaN);
console.log(null);
console.log(undefined);
```

Node에서의 THIS : 현재 모듈에 있는 정보를 출력한다.

JS에서는 대체적으로 전역객체를 가르킴

`console.log(this);`

문자열 형태로 자바스크립트 코드를 작성하면 이것을 평가해 값으로 출력 가능하다.

`eval('const num = 2; console.log(num)'); //2`

## 3. Static & Instance

`Static` - 클래스 이름만을 이용해서 만들수 있음

`Instance` - 객체를 만들어서 접근 가능
