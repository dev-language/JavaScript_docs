const txt = 'hello';

function sayHello() {
    console.log(txt);
}
sayHello();

function outer() {
    const x = 0;
    function inner() {
        console.log(`inside inner: ${x}`);
    }
    inner();
}
outer(); // inside inner: 0

function outer2() {
    const x = 0;
    function inner() {
        console.log(`inside inner: ${x}`);
    }
    return inner;
}
const some = outer2();
some(); // inside inner: 0
inner(); // inside inner: 1
