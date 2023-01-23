const idCard = {
    name: '서근',
    display: function () {
        console.log(`${this.name}: 서근개발노트`); //객체 안에서 내 자신의 데이터에 접근 할 때는 this를 사용해야 한다.
    },
};

idCard.display(); //서근: 서근개발노트
