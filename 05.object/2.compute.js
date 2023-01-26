// ⭐️ 대괄호 표기법 사용 예제
// 객체 동적으로 접근 하는 방법

const obj = {
    name: '서근',
    blog: 'https://seons-dev.tistory.com',
};

// 코딩하는 시점에, 정적으로 접근이 확정되는 경우
obj.blog;
obj.name;

// 동적으로 속성으로 접근하고 싶을때는 대괄호 표기법을 사용한다.
function getValue(obj, key) {
    // return obj.key   // 이런식으로 표현하면 안되는 이유: obj이라는 객체안에 key라는 값이 없음!
    return obj[key]; // 대괄호를 사용하여 전달된 key를 접근할 수 있도록 해준다.
}

// console.log(getValue(obj, blog));   // ReferenceError: blog is not defined
// 함수를 출력할때 key 값을 문자열로 변환 하여 접근해야 한다.
console.log(getValue(obj, 'blog')); //https://seons-dev.tistory.com

/** 객체에 새로운 값을 추가할 수 도 있다. obj, 'key이름', 'value이름' */
function addKey(obj, key, value) {
    return (obj[key] = value);
}
addKey(obj, 'isOnline', '온라인 중입니다.');
console.log(obj);
/*
{
  name: '서근',
  blog: 'https://seons-dev.tistory.com',
  isOnline: '온라인 중입니다.'
}
*/

/**  객체의 값을 삭제하는것도 가능하다. obj, 'key이름'*/
function deleteKey(obj, key) {
    return delete obj[key];
}
deleteKey(obj, 'isOnline');
console.log(obj);
/*
{ name: '서근', blog: 'https://seons-dev.tistory.com' }
*/
