/**
 * 배열에서 특정 요소만 counting
 */
const arr = ['banana', 'kiwi', 'grape', 'kiwi'];

const countOf = (arr, findElement) => {
    return arr.filter(element => element === findElement).length;
}

const result = countOf(arr, 'kiwi');
console.log(result);
