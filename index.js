const idCard = {
    name: '서근',
    display: function () {
        console.log(`${this.name}: 서근개발노트`);
    },
};

//대문자로 시작하면 생성자 함수
function Fruit(name, emoji) {
    this.name = name;
    this.emoji = emoji;
    this.display = () => {
        console.log(`${this.name}: ${this.emoji}`);
    };
    return this;
}

const apple = new Fruit('apple', '🍎');
console.log(apple);
console.log(apple.display());
