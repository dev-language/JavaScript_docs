// 조건문 Conditional Statement
// switch
// if / else if / else 의 반복을 줄여줌
// 정해진 범위안의 값에 대해 특정한 일을 해야 하는 경우
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/switch

let day = 6;
let dayOfTheWeek;

//조건문 if
if (day === 0) {
    dayOfTheWeek = '월요일';
} else if (day === 1) {
    dayOfTheWeek = '화요일';
} else if (day === 2) {
    dayOfTheWeek = '수요일';
} else if (day === 3) {
    dayOfTheWeek = '목요일';
} else if (day === 4) {
    dayOfTheWeek = '금요일';
} else if (day === 5) {
    dayOfTheWeek = '토요일';
} else if (day === 6) {
    dayOfTheWeek = '일요일';
}
console.log(dayOfTheWeek); // 일요일

//조건문 switch
day = 7;
switch (day) {
    case 0:
        dayOfTheWeek = '월요일';
        break;
    case 1:
        dayOfTheWeek = '화요일';
        break;
    case 2:
        dayOfTheWeek = '수요일';
        break;
    case 3:
        dayOfTheWeek = '목요일';
        break;
    case 4:
        dayOfTheWeek = '금요일';
        break;
    case 5:
        dayOfTheWeek = '토요일';
        break;
    case 6:
        dayOfTheWeek = '일요일';
        break;
    default:
        console.log(`${dayOfTheWeek}: '해당 하는 요일이 없음'`);
}
//case별로 break를 사용하여 제어 할 수 있다.

let weather = '천둥';
let feel;

switch (weather) {
    case '맑음':
    case '바람':
    case '오로라':
        feel = '기분 좋음';
        break;
    case '흐림':
        feel = '우울함';
        break;
    case '비':
    case '천둥':
    case '눈보라':
        feel = '집에서 나가기 싫음';
        break;
    default:
        feel = '멍 때리는 중';
        break;
}
console.log(feel); //집에서 나가기 싫음
