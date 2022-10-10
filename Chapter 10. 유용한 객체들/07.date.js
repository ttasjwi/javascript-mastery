// Date(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

// UTC 기준 (협정 시계시, 1970년 1월 1일 UTC 자정과의 시간 차이를 밀리초 단위로 표기)
console.log(new Date());
console.log(new Date('Aug 13, 2022'));
console.log(new Date('2022-12-17T03:24:00'));

console.log(Date.now());
console.log(Date.parse('2022-12-17T03:24:00')); // 밀리초 단위


const now = new Date();
now.setFullYear(2023);
now.setMonth(10); // 10부터 시작

console.log(now.getFullYear()); // 0:1, 10:11월 (개 불편!)
console.log(now.getDate());
console.log(now.getDay()); // 요일 (0:일요일, ... 6:일요일)
console.log(now.getTime()); // 시간으로
console.log(now);

console.log(now.toString());
console.log(now.toDateString()); // 날짜만
console.log(now.toTimeString()); // 시간만
console.log(now.toISOString()); // ISO 8601 형식
console.log(now.toLocaleString('es-US')); // us 형식
console.log(now.toLocaleString('ko-KR')); // 한국 형식
console.log(now.toLocaleString()); // 기본은 시스템의 로케일을 따름
