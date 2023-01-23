// const idCard = {
//     name: '서근',
//     display: function () {
//         console.log(`${this.name}: 서근개발노트`);
//     },
// };

// const idCard2 = {
//     name: '미진',
//     display: function () {
//         console.log(`${this.name}: 미진개발노트`);
//     },
// };

// console.log(idCard);
// console.log(idCard2);

// 위 코드는 비슷한 코드를 두 번 생성했기 때문에 효율적이지 못하다.
// 간단하게 템플릿 생성자를 만들수 있다.
//생성자 함수의 이름은 대문자로 시작한다.
// 하지만, 생성자함수는 현업에서 대부분 사용하지 않고 클래스를 사용한다. 클래스에 관한 내용은 6.class 참고

// 예제 1
function Idcard(name, title) {
    this.name = name;
    this.title = title;
    this.display = () => {
        console.log(`${this.name}: ${this.title}`);
    };
}

const newIdCard = new Idcard('서근', '서근 개발노트');
const newIdCard2 = new Idcard('미진', '미진 개발노트');
console.log(newIdCard);
console.log(newIdCard2);

// 예제 2
function Samsung(product, price) {
    this.product = product;
    this.price = price;
}

const galaxy22 = new Samsung('갤럭시 22', '100만원');
console.log(galaxy22);
