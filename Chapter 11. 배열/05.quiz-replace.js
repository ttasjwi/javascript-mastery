/**
 * 퀴즈 : 주어진 배열 안의 딸기를 키위로 교체하는 함수 만들기.
 * 단 주어진 배열을 수정하지 않도록 할 것
 */

const arr = ['banana', 'strawberry', 'grape', 'strawberry'];


const replace = (arr, fromElement, toElement) => {
    const newArr = new Array(arr.length);
    for (let i=0; i<arr.length; i++) {
        newArr[i] = (arr[i] === fromElement)
            ? toElement
            : arr[i];
    }
    return newArr;
}

const newArr = replace(arr, 'strawberry', 'kiwi');
console.log(newArr);
