// 코드 블럭: { }, if() { }, for() { }. function() { }...
// 블럭 외부에서는 블럭 내부의 변수를 참조할 수 없다.
{
    const a = 'a';
    console.log(a);
}
//console.log(a); //crashed: a is not defined
const b = 'b';

// 함수 외부에서는 함수 내부의 변수를 참조할 수 없다.
const print = () => {
    const msg = 'hello';
    console.log(msg);
};
print();
// console.log(msg); //crashed: msg is not defined

// 함수 외부에서는 함수의 매개변수를 참조할 수 없다.
const sum = (a, b) => {
    console.log(a, b);
};
sum(1, 2);
// console.log(a, b); //crashed: a is not defined, b is not defined
