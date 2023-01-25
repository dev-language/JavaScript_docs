//this 동적 바인딩

// 자바스크립트에서는 누가 호출하냐에 따라 this가 달라진다.
// 즉, 호출하는 사람에 의해 동적으로 결정이 된다.

function Seogun(name) {
    this.name = name;
    this.printName = function () {
        console.log(`서근 블로그 주인 : ${this.name}`);
    };
}

function Hangyeol(name) {
    this.name = name;
    this.printName = function () {
        console.log(`한결 블로그 주인 : ${this.name}`);
    };
}

const seogun = new Seogun('서근');
const hangyeol = new Hangyeol('한결');
seogun.printName();
hangyeol.printName();

seogun.printName = hangyeol.printName;
seogun.printName();
