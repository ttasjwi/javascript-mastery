// 조건문 Conditional Statement
// switch
// if else if else if else if ... else
//
let day = 6;
let dayName;
switch (day) {
    case 0:
        dayName = '월요일';
        break;
    case 1:
        dayName = '화요일';
        break;
    case 2:
        dayName = '수요일';
        break;
    case 3:
        dayName = '목요일';
        break;
    case 4:
        dayName = '금요일';
        break;
    case 5:
        dayName = '토요일';
        break;
    case 6:
        dayName = '일요일';
        break;
    default:
        dayName = '해당하는 요일이 없음!';
}
console.log(dayName);

let condition = 'okay';
let text;
switch (condition) {
    case 'okay':
    case 'good':
        text = '좋음!'
        break;
    default:
        text = '나쁨 ...'
}
console.log(text);
