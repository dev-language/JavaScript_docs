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

//원하는 함수 앞에 get을 넣어 주면 된다!

class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.lastName} ${this.firstName}`;
    }
}

const seogun = new Student('서근', '김');
console.log(seogun.firstName); // 서근
console.log(seogun.fullName); // 김 서근
