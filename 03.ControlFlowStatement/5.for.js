// 반복문 Loop Statement
// for(변수선언문; 조건식; 증감식) { }
//? https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for

//^ 실행순서
//^ 1. 변수선언문
//^ 2. 조건식의 값이 true이면 { } 코드 블럭 수행
//^ 3. 증감식 수행
//^ 4. 조건식이 false가 될때까지 2번과 3번을 반복함

//! 주의
//! 조건은 언젠가는 false되어 반드시 중지가 되야 하지만, loop가 계속 반복되어 무한 루프가 될 수 있기 때문에 주의해야 한다.
//! for(;;) {}
//! 조건이 영원이 true가 되지 않도록 주의하자!

for (let i = 0; i <= 5; i++) {
    console.log(i);
}
// i는 0이고, i가 5와 크거나 같을때까지 i에 1씩 더한다.
/*
0
1
2
3
4
5
*/
console.clear();

for (let i = 0; i <= 5; i = i + 2) {
    console.log(i);
}
/*
0
2
4
*/

console.clear();

// for안에 for을 중첩해서 사용 가능하다
for (let i = 0; i < 3; i++) {
    for (let j = 0; j <= 5; j++) {
        console.log(i, j);
    }
}
// for안에 있는 값이 5가 될때까지 true 이기때문에,
// 첫 for은 0인 상태로 두 번째 for이 false가 될때까지 반복된다.

/*
0 0
0 1
0 2
0 3
0 4
0 5
1 0
1 1
1 2
1 3
1 4
1 5
2 0
2 1
2 2
2 3
2 4
2 5
*/

console.clear();

// 반복문 제어: continue, break;
// break는 구문을 종료 해주고, continue 다음으로 오는 코드는 무시된다.

for (let i = 0; i <= 20; i++) {
    if (i === 10) {
        console.log('i가 10에 도달했습니다.');
        break;
    }
    console.log(i);
}

for (let i = 0; i <= 20; i++) {
    if (i === 10) {
        continue;
        console.log('i가 10에 도달했습니다.');
    }
    console.log(i);
} //이렇게 되면 10은 무시된다.
