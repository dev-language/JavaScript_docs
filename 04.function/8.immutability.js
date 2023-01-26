// 정말 중요한 내용

//! ⭐️ Immutability 불변성
//! mutable 변경할 수 있는

// 함수 내부에서 외부로부터 주어진 인자값을 변경하는것은 매주 좋지 않다.
// 상태변경이 필요한 경우, 새로운 상태를 만들어 반환해야 한다.
// 원시값 - 값에 의한 복사
// 객체값 - 참조에 의한 복사 인것을 다시 기억하자

// function age(num) {
//     console.log(num);
// }
// const myAge = 20;
// console.log(myAge); //20 

// 그런데 여기서 함수 내부에 외부로 부터 주어진 인자값을 변경한다면?

function age(num) {
    num = 12;
    console.log(num);
}
const myAge = 20;
age(myAge); //12
console.log(myAge); //20

//12가 출력되는것을 볼 수 있다. 이유는
/* 
myAge가 age함수로 메모리 주소가 전달이 되고 출력이 시작되면서 num은 12로 재지정 되므로 myAge는 12가 된다.
myAge를 한 번 출력해본다면  20이 나오는것을 확인할 수 있는데, 20을 함수로 전달해서 인자값이 12로 바뀌었기 때문에 이렇게 함수를 짜는것은 매우 좋지 않다 ❌❌❌
*/

// 다른 예를 들어보자

// function Idcard(string) {
//     console.log(string);
// }

// const Seogun = { name: '서근' };
// Idcard(Seogun); //{ name: '서근' }

// 하지만 여기서 함수 내부에 인자 값을 바꾼다면?

function Idcard(string) {
    string.name = '미진'; //❌❌❌외부로 부터 주어진 인자를 내부에서 변경하지 말자!! ❌❌❌
    console.log(string);
}

Seogun = { name: '서근' };
Idcard(Seogun); //{ name: '미진' }

// 함수 내무에서 무언가를 바꿔야 한다면 아래와 같이 작성할 수 있다. 배열편에서 다룸
function chageName(obj) {
    // 이름 부터 변경한다는 느낌을 주도록
    return { ...obj, name: '서근' }; // 반환할때는 새로운 오브젝트 만들기
}
