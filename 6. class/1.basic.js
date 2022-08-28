// 객체를 쉽게 만들 수 있는 템플릿 종류

// 1. 생성자 함수 ( 현업에서 거의 사용되지 않음)
// 2. 클래스 ( 현업에서 사용 )

//! 아래 생성자 함수를 클래스로 바꿔보자!

// function Idcard(name, title) {
//     this.name = name;
//     this.title = title;
//     this.display = () => {
//         console.log(`${this.name}: ${this.title}`);
//     };
// }

// const newIdCard = new Idcard('서근', '서근 개발노트');
// const newIdCard2 = new Idcard('미진', '미진 개발노트');
// console.log(newIdCard);
// console.log(newIdCard2);

class IdCard {
    constructor(name, title) {
        this.name = name;
        this.title = title;
    }
    // 클래스에서의 함수는 생서자 밖에서 등록하면 된다.
    display = () => {
        console.log(`${this.name}: ${this.title}`);
    };
}

const newIdCard = new IdCard('서근', '서근 개발노트');
const newIdCard2 = new IdCard('미진', '미진 개발노트');
console.log(newIdCard);
console.log(newIdCard2);
console.log(newIdCard.display());
