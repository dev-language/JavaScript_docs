// example 1

function add(a, b) {
    console.log('함수 출력');
    return a + b;
}
const result = add(1, 2);
console.log(result); // 3

// example 2

function myName(lastName, firstName) {
    return `${lastName}, ${firstName}`;
}

let lastName = '김';
let firstName = '선중';

console.log(myName(lastName, firstName));

let lastName2 = '김';
let firstName2 = '미진';

console.log(myName(lastName2, firstName2));
