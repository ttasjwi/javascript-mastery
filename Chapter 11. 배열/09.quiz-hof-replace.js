/**
 * 퀴즈 : 주어진 배열 안의 딸기를 키위로 교체하는 함수 만들기.
 * - 단 주어진 배열을 수정하지 않도록 할 것
 * - 고차함수를 이용하여 교체하기
 */

const arr = ['banana', 'strawberry', 'grape', 'strawberry'];

function replaceItemIfMatch(arr, target, replacement) {
    return arr.map(element => (element === target) ? replacement : target);
}

const result = replaceItemIfMatch(arr, 'strawberry', 'kiwi');
console.log(result);
