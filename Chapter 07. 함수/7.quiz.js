// 주어진 숫자만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야함
// 5, 순회하는 숫자를 다 출력
// 5, 순회하는 숫자의 두배값을 다 출력하고 싶음
// iterate(max, action)

const identity = num => num;
const double = num => 2 * num;

function iterate(max, action) {
    for (let i = 0; i <= max; i++) {
        console.log(action(i));
    }
    return;
}

iterate(5, identity);
console.log()

iterate(5, double);

setTimeout(()=> {
    console.log('3초 뒤 이 함수가 실행될거에요.')
}, 3000);
