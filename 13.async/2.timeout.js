function execute() {
	console.log('1');
	setTimeout(() => {
		// 콜백함수를 던져만 놓고 밑에 코드를 실행. 3초 후 콜백함수를 스택에 가져와서 실행
		console.log('2');
	}, 3000);
	console.log('3');
}
execute();

/* 출력
1
3
2
*/
