// console.log(count);
// increase();
// console.log(count);
// increase();
// count = -10;
// console.log(count);

// import {increase as increase1, getCount} from "./counter.js";

import * as counter from './counter.js';
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Modules

counter.increase(); // 모듈화 => 접근이 허용된 increase 함수만 호출 가능
counter.increase();
counter.increase();

console.log(`현재 count : ${counter.getCount()}`);
