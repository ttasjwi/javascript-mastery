// while(조건) {}
// 조건이 false가 될 때까지 {} 코드를 반복 실행
let num = 5;
while (num >= 0) {
    console.log(num);
    num--;
}

let i = 0;
while (true) {
    console.log('아직 살아 있다...!');
    if (i++ === 10) {
        console.log('죽었다...');
        break;
    }
}

let isActive = false;
do {
    console.log('do-while 살아있다...!')
} while (isActive)
console.log('do-while 죽었다...')
