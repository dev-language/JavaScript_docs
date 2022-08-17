// 조건문 Conditional Statement
// if(조건) {}
// if(조건) {} else {}
// if(조건1) {} else if(조건2) {} else {}
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/if...else

//조건문 if 안에는 false가 들어가면 안된다.

let seogun = '서근';
if (seogun == '서근') {
    console.log('일치합니다');
}

seogun = '미진';
if (seogun == '서근') {
    console.log('일치합니다');
} else {
    console.log('일치하지 않습니다.');
}

let mijin = '미진';
seogun = '미진';
if (seogun == '서근') {
    console.log('당신은', seogun, '입니다.');
} else if (mijin == '미진') {
    console.log('당신은', mijin, '입니다.');
} else {
    console.log('일치하지 않습니다.');
}
