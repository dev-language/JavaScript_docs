// 증감 감소 연산자

let a = 0;

a++; //증감
console.log(a); //1

a--; //감소
console.log(a); //0

console.clear();

// 주의 사항
// ++ / -- 를 앞에 쓰냐 뒤에 쓰냐에 따라 기능이 달라짐
// a++ 필요한 연산을 하고, 그 뒤 값을 증가시킴
// a-- 값을 먼저 증사하고, 필요한 연산을 함

let b = 0;
let c = b++;
console.log(c); //0
//b는 0이고 c에 b를 먼저 할당한 뒤에 코드가 끝나면, b에 +1이 증가된다. 그렇기 때문에 b를 출력해보면 1이 c를 출력해보면 0이라는것을 알 수 있다.
console.log(b); //1

b = 123;
c = b--;
console.log(c); //123
console.log(b); //122

//그렇기 때문에 이럴때 증감 연산자를 사용하기 위해서는 ++ / -- 를 앞에 위치 시켜줘야 한다.
b = 0;
c = ++b;
console.log(b); //1
console.log(c); //1

b = 0;
c = b++;
console.log(b); //1
console.log(c); //0
