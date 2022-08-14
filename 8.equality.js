// 동등 비교 관계 연산자 (Equality operators)
// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘다 같음
// !=== 값과 타입이 다름

console.log(2 == 2); //true
console.log(2 != 2); //false
console.log(2 != 3); //true
console.log(2 == 3); //false
console.log(2 == '2'); //true  2와 '2'는 타입은 다르지만 값이 같기 때문에 true
console.log(2 === '2'); //false 2와 '2'는 값은 같지만 타입이 다르기 때문에 false (코딩할때는 타입 비교 연산자를 사용하는것이 좋음)
console.log(1 == true); //true
console.log(1 === true); //false  1은 number이고 true는 boolean 이기 때문
console.clear();

//객체 에서는 조금 다름. 객체(object)는 부여되는 주소가 각각 다르기 때문에 값이 다르다.
const object1 = {
    name: 'Seogun',
};

const object2 = {
    name: 'Seogun',
};

console.log(object1 == object2); //false
console.log(object1 === object2); //false 타입은 같지만 객체의 메모리 주소가 다르기 때문에 즉, 값이 다르기 때문에 false
console.log(object1.name == object2.name); //true
console.log(object1.name === object2.name); //true

let object3 = object2;
console.log(object2 == object3); //true  object2와 object3는 메모리주소와 값이 모두 같기 때문에 true
console.log(object2 === object3); //true
