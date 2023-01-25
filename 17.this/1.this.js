/**
 * 글로벌 컨텍스트의 This
 *  - 브라우저: Window
 *  - 노드: 모듈
 */

/*⭐️=========노드에서의 This: 모듈 */
const x = 0;
module.exports = x; // 모듈을 Exports 해주면 this는 export된 { x: 0 } 가 들어감.

console.log(this); // this란 모듈을 가르킴. 만약 모듈 없이 출력하면 빈 { } 객체가 나옴
console.log(globalThis); // 노드에서 사용가능한 전역 객체
// globalThis.setTimeout(); // 접근 가능
// setTimeout() // global 객체에 있는 함수라면 globalThis 생략 가능

/*⭐️=========브라우저에서의 This: Window */

console.log(this); // window에 들어있는 다양한 window 객체 API
console.log(this.setTimeout); // window 안에 있는 setTimeout
console.log(setTimeout); // window에서 this 생략 가능
console.log(globalThis); // window에서 globalThis는 동일하게 window 객체가 나타남

console.clear();

/*⭐️=========함수 내부에서의 This */
// 엄격모드('use strict')에서는 Undefined
//  ㄴ 함수란 스코프 내부에서 this에 대한 디폴트 바인딩(정보)이 없기 때문에
// 느슨한 모드에서는 globalThis
//  ㄴ 함수 안에서 this는 함수의 주인에게 바인딩 되는데 함수의 주인은 window객체 이다.

function someThis() {
    console.log(this); // 함수 내부에서 this에 접근하면 globalThis 글로벌 객체에 접근
}
someThis();

/*⭐️=========생상자 함수 또는 클래스에서의 This: 앞으로 생성될 인스턴스 자체를 가르킴 */
function Animal(name) {
    this.name = name;
    this.printName = function () {
        console.log(`내 애완동물의 이름은 ${this.name}`);
    };
}

const dog = new Animal('초코');
const cat = new Animal('나비');
dog.printName(); //강아지
cat.printName(); //고양이
