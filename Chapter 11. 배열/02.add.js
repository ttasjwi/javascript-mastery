const fruits = ['banana', 'apple', 'grape', 'orange'];

// 배열 아이템을 참조하는 방법
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]); // 인덱스 범위를 벗어나면 undefined가 반환됨
console.log(fruits.length); // 배열의 요소 갯수
console.log();

for (let i=0; i<fruits.length; i++) {
    console.log(fruits[i]);
}

// 추가, 삭제 - 좋지 않은 방식
fruits[4] = 'strawberry'; // 있으면 덮어씀, 뒤의 인덱스면 그 사이 인덱스가 비어있음
fruits[fruits.length] = 'watermelon';
console.log(fruits);

delete fruits[1];
console.log(fruits); // delete 키워드를 쓰면 삭제되고 해당 인덱스가 비어있음
