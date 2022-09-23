
// 함수 내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 좋지 않다.
// 상태 변경이 필요한 경우에는 새로운 상태(오브젝트, 값)을 만들어서 반환해야함.
// 원시값은 값이 전달되고, 객체 타입은 주솟값이 전달됨(call by Value)
function display(num) {
    num ++;
    console.log(num);
}

const value = 4;
display(value);
console.log(value);

function changeName(obj) { // 함수명을 잘 지어서 어떤 변경이 일어나는 지를 알리는게 좋음.
    return {...obj, name: '땃쥐'}; // 복사해서 새로운 객체를 전달해라.
}

const ttasjwi = {name: 'ttasjwi'};
console.log(ttasjwi);
const result = changeName(ttasjwi);
console.log(result);
