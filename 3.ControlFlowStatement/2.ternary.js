// 삼항연산자 Ternary Operator
// 조건식 ? true : false

let mijin = '미진';
let seogun = '미진';

/*
if (seogun == '서근') {
    console.log('당신은', seogun, '입니다.');
} else if (mijin == '미진') {
    console.log('당신은', mijin, '입니다.');
} else {
    console.log('일치하지 않습니다.');
}
*/

seogun === '서근' ? console.log(`당신은 ${seogun} 입니다.`) : console.log(`당신은 ${mijin} 입니다.`);

//값 자체를 넣는것도 가능하다
seogun = '서근';
let nickname = seogun === '서근' ? `당신은 ${seogun} 입니다.` : `당신은 ${mijin} 입니다.`;
console.log(nickname);
