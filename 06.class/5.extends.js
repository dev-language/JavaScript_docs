// class Tiger {
//     constructor(color) {
//         this.color = color;
//     }
//     eat() {
//         console.log('먹자!');
//     }
//     sleep() {
//         console.log('잔다!');
//     }
// }

// class Dog {
//     constructor(color) {
//         this.color = color;
//     }
//     eat() {
//         console.log('먹자!');
//     }
//     sleep() {
//         console.log('잔다!');
//     }
//     play() {
//         console.log('놀자!');
//     }
// }

// 상속을 이용하면 중복을 줄여줘서 공통된 속성과 행동을 할당해 줄 수 있다.
// 사용 방법 : const 클래스명 extends 상속받을클래스명 {}

class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    get eat() {
        console.log('먹자!');
    }
    get sleep() {
        console.log('잔다!');
    }
}

class Tiger extends Animal {}
const tiger = new Tiger('호랑이', '노란색');
console.log(tiger);
tiger.eat;
tiger.sleep;

//! super: 내가 상속하고 있는 부모클래스를 가르킴.
class Dog extends Animal {
    // 자식클래스에서 constructor를 정의하려면 부모의 constructor를 모두 받아와야 한다.
    // 그리고 super 키워드를 사용해서 상속하고 있는 부모 생성자의 속성을 전달해준다.
    constructor(name, color, ownerName) {
        super(name, color); //super 키워드는 한 번 만 사용 가능하다.
        this.ownerName = ownerName;
    }
    get play() {
        console.log('놀자!');
    }
    //자식 클래스에서 부모클래스에 있는 함수를 덮어 씌울 수 있다. (overriding)
    get eat() {
        //함수 안에도 super키워드를 사용해서 부모 클래스의 속성을 먼저 출력할 수 있다.
        super.eat;
        console.log('강아지가 먹는다.');
    }
}
const dog = new Dog('초코', '하양색', '서근');
console.log(dog); //Dog { name: '초코', color: '하양색', ownerName: '서근' }
dog.eat; //먹자! 강아지가 먹는다.
dog.sleep; // 잔다!
