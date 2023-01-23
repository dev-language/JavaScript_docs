class IdCard {
    name;
    title;
    blog = '티스토리'; //blog라는 맴버 프로퍼티에 지정된 값을 넣어줄 수 도 있다. 즉, 클래스가 만들어 지자마자 '티스토리'로 초기화가 됨
    constructor(name, title) {
        this.name = name;
        this.title = title;
    }
    display = () => {
        console.log(`${this.name}: ${this.title}`);
    };
}

const seogun = new IdCard('서근', '서근 개발노트');
console.log(seogun);

/*
IdCard {
  name: '서근',
  title: '서근 개발노트',
  blog: '티스토리',
  display: [Function: display]
}
*/

//! 접근 제어자 - 캡슐화
// 한 번 만들어진 인스턴스에 내용을 외부에서 변경하지못하게 하는것이 접근 제어자 이다.
// 예를들어 아래 코드에서 seogun 이라는 인스턴스가 있는데 이름을 '미진'으로 한다면? 안된다.
// 그렇기 때문에 외부에서 접근 하지 못하게 접근 제어자를 사용해야 한다.

// 자바스크립트에서는 Public가 기본값이고, 다른 프로그래밍언어의 private 즉 외부에서 접근하지 못하는 키워드는 (#) 으로 사용할 수 있다.
// #키워드는 사용된 모든곳에 붙여줘야 한다.

class Fruit {
    #name; // 외부로 부터 전달 받은 프로퍼티 Name과 title. 접근 제어자는 #으로 표시
    icon;
    #type = '과일';
    constructor(name, icon) {
        this.#name = name;
        this.icon = icon;
    }
    #display = () => {
        console.log(`${this.#name}: ${this.icon}`);
    };
}

const apple = new Fruit('사과', '🍎');
console.log(apple); // Fruit { display: [Function: display], name: '사과', icon: '🍎' }

// apple.#name = '오렌지';
// console.log(apple); // Private field '#name' must be declared in an enclosing class
// apple.display() //호출 안됨.

// 만약 Fruit 클래스를 모두 호출해보면 private된 프로퍼티는 보이지 않는것을 확인할 수 있다.
console.log(Fruit);
//Fruit { icon: '🍎', display: [Function: display] }
