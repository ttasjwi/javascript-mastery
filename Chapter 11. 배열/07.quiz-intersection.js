/**
 * 두 배열 전달받아서, 배열1에서, 배열2에 존재하는 item만 배열에 담아 반환 (새로운 배열로)
 */

const arr1 = ['banana', 'kiwi', 'grape'];
const arr2 = ['banana', 'strawberry', 'grape', 'strawberry'];

const intersection = (arr1, arr2) => {
    const result = new Array();

    for (const element1 of arr1) {
        if (arr2.includes(element1)) result.push(element1);
    }

    return result;
};

console.log(intersection(arr1, arr2));
