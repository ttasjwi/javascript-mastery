// 연산자 우선순위
let a = 2;
let b = 3;
let result = a + b * 4;
console.log(result); // 곱셈, 나눗셈의 우선순위가 덧셈, 뺄셈보다 높다

result = a++ + b * 4;
console.log(result);

a = 2;
b = 3;
result = ((a+b) * 4);
console.log(result); // 괄호의 우선순위가 제일 높다
