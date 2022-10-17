
// Nullish Coalescing Operator
// ES11 (ECMAScript 2020)
// ?? : Nusllish한 경우 설정(할당) - null, undefined
// || : falshy한 경우 설정(할당) - 0, -0. '', null, undefined

let num = 0;
console.log(num || '-1'); // 0이 falshy하므로, 뒤의 것이 평가되어 반환됨...

console.log(num ?? '-1'); // 0이 nullish하지 않으므로 그대로 반환됨
