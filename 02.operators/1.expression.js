let b; // 선언문
b = '서근'; // 표현식, 선언문

// let a = let b;  // 값을 할당 할 수 없는 선언문
let a = (b = '미진');
console.log(a);

let c;
c = 3;

let d = (c = 4);
console.log(d);
