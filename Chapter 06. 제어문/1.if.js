// 조건문 Conditional Statement
// if (조건) {}
// if (조건) {} else {}
// if (조건1) {} else if(조건2) {} ... else {}

let fruit = 'orange';

if (fruit === 'apple') {
    console.log('사과!');
} else if (fruit === 'orange') {
    console.log('오렌지!')
} else {
    console.log('!!')
}

if (2 > 1) { // true로 평가될 수 있는 표현식이 오면 블록 안의 코드가 실행됨
    console.log('출력되야 함!');
}
