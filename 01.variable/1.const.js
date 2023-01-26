// let 재할당 가능한
let name = '서근';
console.log(name);
name = '미진';
console.log(name);

// const 재할당이 불가능한
// 1.  상수
// 2. 상수변수 혹은 변수
const seogun = '서근';
console.log('seogun:', seogun);
console.clear();

// 상수
const SEOGUNS_MACPRO = '소유자: 서근';
console.log(SEOGUNS_MACPRO);
// SEOGUNS_MACPRO = "소유자: 미진"; //TypeError: Assignment to constant variable.

console.clear();

// 재할당 불가 상수변수 혹은 변수
const House = {
    address: 'Seoul',
    Apartment: 'Han',
    zipCode: 10000,
};

// House = {} // Assignment to constant variable.

House.address = 'Deajon';
House.Apartment = 'Su';
House.zipCode = 33233;
console.log(House);

//{ address: 'Deajon', Apartment: 'Su', zipCode: 33233 }
