//Static 정적 프로퍼티와 메서드

// class IdCard {
//     constructor(name, title) {
//         this.name = name;
//         this.title = title;
//     }
//     클래스에서의 함수는 생서자 밖에서 등록하면 된다.
//     여기서 display() 함수는 인스턴스 레벨의 함수이다.
//     display = () => {
//         console.log(`${this.name}: ${this.title}`);
//     };
// }

// 클래스안에서 static를 사용하지 않으면 인스턴스 레벨 이기 때문에 클래스 이름을 통해서 접근은 불가능 하다.
// Fruit.display()  //불가능!
// 클래스는 템플릿 이기때문에 안에 아무런 데이터가 존재 하지 않기 때문이다.
// 즉, Static 키워드를 사용하면 클래스 레벨의 인스턴스를 만들 수 있다.

// 그렇다면 static을 어떻게 사용할까?
// 아래 display() 함수는 this.name을 참고하고 있기 때문에 인스턴스 레벨의 함수로 놔두는게 좋다.

class IdCard {
    static MAX_IDCARD = 10;
    constructor(name, title) {
        this.name = name;
        this.title = title;
    }

    static makeRandomInfo() {
        // 클레스 레벨의 메서드 에서는 this를 참조 할 수 없다.
        return new IdCard('희진', '희진 개발노트');
    }
    // 여기서 display() 함수는 인스턴스 레벨의 함수이다.
    display = () => {
        console.log(`${this.name}: ${this.title}`);
    };
}

//이런식으로 클래스 이름.makeRandomInfo() 클래스 함수를 직접 호출할 수 있다.
const newIdCard3 = IdCard.makeRandomInfo();
console.log(newIdCard3);

console.log(IdCard.MAX_IDCARD); //10

const newIdCard = new IdCard('서근', '서근 개발노트');
const newIdCard2 = new IdCard('미진', '미진 개발노트');

console.log(newIdCard);
console.log(newIdCard2);
console.log(newIdCard.display());

/* 인스턴스 안에 static 클래스 레벨의 메서드는 포함되지 않는것을 확인할 수 있다.
IdCard { display: [Function: display], name: '희진', title: '희진 개발노트' }
10
IdCard { display: [Function: display], name: '서근', title: '서근 개발노트' }
IdCard { display: [Function: display], name: '미진', title: '미진 개발노트' }
서근: 서근 개발노트
*/

// 사용 예제
Math.pow(); // Math라는 static을 이용하면 별도의 객체를 만들지 않고도 pow라는 별도의 함수들을 관리할 수 있다.
Number.isFinite(10);
