function add(a, b) {
    return a + b;
}
const sum = add;

//add와 sum의 메모리 주소는 동일하다.

console.log('sum:', add(1, 2));
console.log('add:', sum(1, 2));

// 인자 값을 전달하지 않으면?
// 함수 인자 값인 a와 b가 undefined이 되고,
// undefined끼리 더해 리턴을 하기 때문에 숫자가 아닌 NaN이 된다.
function someNumber(a, b) {
    console.log(a);
    console.log(b);
    return a + b;
}

console.log(someNumber()); //NaN
