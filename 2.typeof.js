let someVariable
console.log(typeof someVariable);
//undefined

someVariable = "";
console.log(typeof someVariable);
//string

someVariable = 200;
console.log(typeof someVariable);
//number

someVariable = { name: '이름', age: 22, };
console.log(typeof someVariable);
//object

someVariable = function () { };
console.log(typeof someVariable);
//function

someVariable = Symbol();
console.log(typeof someVariable);
// symbol

console.log(typeof Symbol()) //symbol
console.log(typeof {}) //object