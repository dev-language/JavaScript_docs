// 정직원과 파트타임 직원을 나타낼 수 있는 클래스를 만들어야 한다.
// 직원 정보 : 이름, 부서이름, 한달 근무시간
// 매달 직원의 정보를 이용해 한달 월급을 계산해야 한다.
// 정직원 시간당 10,000
// 파트타임 직원 시간당 8,000

class Employee {
    constructor(name, department, hoursPerMonth, payRate) {
        this.name = name;
        this.department = department;
        this.hoursPerMonth = hoursPerMonth;
        this.payRate = payRate;
    }
    totalSalary() {
        return this.hoursPerMonth * this.payRate;
    }
}

class FulltimeEmployee extends Employee {
    static PAY_RATE = 10000;
    constructor(name, department, hoursPerMonth) {
        super(name, department, hoursPerMonth, FulltimeEmployee.PAY_RATE);
    }
}

class ParttimeEmployee extends Employee {
    static PAY_RATE = 8000;
    constructor(name, department, hoursPerMonth) {
        super(name, department, hoursPerMonth, ParttimeEmployee.PAY_RATE);
    }
}

const seogun = new FulltimeEmployee('서근', '총무과', 30);
const mijin = new ParttimeEmployee('미진', '회계과', 20);
console.log(seogun.totalSalary());
console.log(mijin.totalSalary());
