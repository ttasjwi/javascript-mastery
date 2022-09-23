// 사용 예제 1
function add(num1, num2) {
    return num1 + num2;
}

const result = add(1, 2);
console.log(result);


// 사용 예제 2
function fullName(firstName, lastName) { // 주의 : 함수 명도 하나의 식별자라서 같은 모듈에서 변수명으로 중복해서 사용할 수 없다.
    return `${firstName} ${lastName}`;
}

// fullName : 함수 참조값이 저장되어 있음
// fullName(...) : 함수의 반환값

let lastName1 = '김';
let firstName1 = '지수';
console.log(fullName(firstName1, lastName1));

let lastName2 = '박';
let firstName2 = '철수';
console.log(fullName(firstName2, lastName2)); // 재사용성
