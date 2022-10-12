/**
 * 숫자 배열을 입력받아, 5 이상의 숫자들의 평균을 반환하는 고차함수 만들기
 */

const nums = [3, 16, 5, 25, 4, 34, 21];

function solution(filterCallback, nums) {
    return nums.filter(filterCallback)
        .reduce((avg, num, _, arr) => avg + num/arr.length, 0);
}

const result = solution(num => num >= 5, nums);
console.log(result);
