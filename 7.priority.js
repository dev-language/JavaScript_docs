// 연산자 우선 순위 (priority)
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#%ED%91%9C

let a = 2;
let b = 3;

let result = a + b * 5;
console.log(result); //17

result = a++ + b * 5; //17
console.log(result); //a++ 출력이 끝난뒤에 a에 증감이 일어나기 때문
console.log(a);

a = 2;
result = ++a + b * 5; //18
console.log(result);

//우선 순위를 정하고 싶을땐 괄호(그룹)를 사용함
result = (++a + b) * 5; //35
console.log(result); // (4+3) * 5
