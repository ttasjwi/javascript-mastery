const apple = {
    name: 'apple',
    color: 'red',
    display: function() {
        console.log(`${this.name}: ${this.color}`);
    },
};

apple.display(); // 객체는 연관된 상태와, 행동을 묶어서 관리할 수 있다
