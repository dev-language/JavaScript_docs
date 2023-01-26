//접근자 프로퍼티

// class Student {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     fullName() {
//         return `${this.lastName} ${this.firstName}`;
//     }
// }

// const seogun = new Student('서근', '김');
// console.log(seogun.firstName); //firstName은 프로퍼티처럼 호출이 가능한데,
// console.log(seogun.fullName()); //fullName은 함수처럼 () 사용해야 한다.  좀 이상하다.. 이때 사용할 수 있는게 접근자 프로퍼티

//! GETTER
// 프로퍼티에 함수로 접근하는것이 아닌, 프로퍼티에 접근하려면
// 원하는 함수 앞에 get을 넣어 주면 된다!
// 접근자 프로퍼티를 사용하면 호출하는 시점에 데이터를 만들어 리턴을 해준다.

class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // get
    get fullName() {
        return `${this.lastName} ${this.firstName}`;
    }

    // set 무언가를 할당 할 때
    set fullName(value) {
        console.log('set', value);
    }
}

const seogun = new Student('서근', '김');
console.log(seogun.firstName); // 서근
console.log(seogun.fullName); // 김 서근

seogun.fullName = '김 미진'; //set 김 미진
