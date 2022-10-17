// 주어진 배열에서 중복을 제거하세요

const fruits = ['banana', 'apple', 'grape', 'banana', 'apple', 'peach'];
console.log(fruits);

function distinct(arr) {
    return [... new Set(arr)];
}
console.log(distinct(fruits));

// 주어진 두 Set의 공통된 item만 담고 있는 Set 반환
const set1 = new Set([1,2,3,4,5]);
const set2 = new Set([1,2,3]);

function findIntersection(set1, set2) {
    return new Set([...set1].filter(item => set2.has(item)));
}

const interSection = findIntersection(set1, set2);
console.log(interSection);
