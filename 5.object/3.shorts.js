const x = 0;
const y = 0;
const coordinate = { x: x, y: x };
// x라는 키 이름과 참조하고 있는 변수 이름이 동일하다면 x:x, y:y 대신 값을 생량할 수 있다.
//contst coordinate = { x, y }

function makeobj(name, age) {
    return {
        name,
        age,
    };
}

function makeobj2(x, y) {
    return {
        x,
        y,
    };
}

console.log(makeobj2('선중', '블로그'));
console.log(makeobj('서근', 20));
