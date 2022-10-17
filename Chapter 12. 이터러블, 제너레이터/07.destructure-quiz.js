const prop = {
    name: 'Button', // prop 오브젝트를 전달하여 color를 꺼낼 수 있도록 하기
    styles: {
        size: 20,
        color: 'black',
    },
};

function changeColor({styles:{color}}) { // 내부 객체의 프로퍼티를 구조분해 할당
    console.log(color);
}

changeColor(prop);
