// 객체 object 만드는 종류

// 1. obejct literal { key: value }
// 2. new object()
// 3. object.create();

// key  - 문자, 숫자, 문자열, 심볼 타입
// value - 원시값, 객체 (함수)

let idCard = {
    name: '서근',
    1: 1000,
    'seogun-dev': '서근 개발노트', // 문자열은 대쉬(-) 를 사용하여 키를 작성할 수 있다.
    ['seogun-blog']: 'https://seons-dev.tistory.com', // 대괄호 안에 문자열을 작성할 수 있다.
};

// 속성, 데이터에 접근하기 위해서는 객체이름.키(idCard.key) 처럼 코드를 작성하면 된다.
// key에 대쉬로 작성된 문자열 값은 점(.) 으로 불러올 수 없고, 대괄호 ['']로 작성해주면 된다.
// idCard.key 같은 형태는 마침표 표기법 dot notation
// idCard['seogun-dev'] 같은 형태는 대괄호 표기법 bra-ket notation 이라 한다.
// 하지만 특수한 경우가 아니라면 대괄호 표기법으로 작성하는것을 지양하는것이 좋다.

console.log(idCard.name); //서근
console.log(idCard[1]); //1000
console.log(idCard['seogun-dev']); //서근 개발노트
console.log(idCard['seogun-blog']); //https://seons-dev.tistory.com

// 객체에 속성을 추가하는 방법
idCard.isOnline = `${idCard.name}님은 온라인 중입니다.`;
console.log(idCard.isOnline); //서근님은 온라인 중입니다.
console.log(idCard['isOnline']); // 대괄호 표기법으로도 호출이 가능하다.

// 속성 삭제 방법
delete idCard.isOnline;
console.log(idCard.isOnline); // undefined
