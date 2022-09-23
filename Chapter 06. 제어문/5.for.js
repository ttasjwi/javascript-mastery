// 반복문 Loop Statement
// for (변수 선언문; 조건식; 증감식) { }
// 실행 순서 ;
// 1. 변수 선언문
// 2. 조건식의 내용이 참이면 { } 블럭 수행
// 3. 증감식 수행
// 4. 조건식이 거짓이 될 때까지 2, 3번을 반복함


for (let i = 0; i < 5; i++) {
    console.log(i);
}

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        console.log(i, j);
    }
}

// 무한 루프
// for (; ;) {
// }

// 반복문 제어 : continue, break;
for (let i = 0; i < 20; i++) {
    console.log(i);
    if (i === 10) {
        console.log('i가 10이 되었다!');
        break;
    }
}

for (let i =0; i<20; i++) {
    if (i === 10) {
        console.log('10은 건너뛸거야.');
        continue;
    }
    console.log(i);
}
