/**
 * 배열에서 특정 요소만 counting
 */
const arr = ['banana', 'kiwi', 'grape', 'kiwi'];

const countOf = (arr, findElement) => {

    let count = 0;
    for (const element of arr) {
        if (element === findElement) {
            count ++;
        }
    }
    return count;
}

console.log(countOf(arr, 'kiwi'));
