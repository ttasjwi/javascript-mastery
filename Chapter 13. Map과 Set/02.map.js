const map = new Map([
    ['key1', 'apple'],
    ['key2', 'banana']
]);
console.log(map);

// size 확인
console.log(map.size);

// 존재하는 지 확인
console.log(map.has('key1'));

// 순회
map.forEach((value, key) => {
    console.log(`key = ${key}, value = ${value}`);
});
console.log(map.keys());
console.log(map.values());
console.log(map.entries());


// 찾기
console.log(map.get('key1'));
console.log(map.get('key2'));
console.log(map.get('key4')); //undefined

// 추가
map.set('key3', 'kiwi');
console.log(map);

// 삭제
map.delete('key3');
console.log(map);

// 전부 삭제
map.clear();
console.log(map);

// 오브젝트 vs Map
const key = {name:'milk', price:10};
const milk = {name:'milk', price:10, description:'맛있는 우유'};
const obj = {
    [key]:milk,
}
console.log(obj);
const map2 = new Map([[key, milk]]);
console.log(map2); // 비슷하지만 사용 가능한 기능이 다름

console.log(obj[key]);
console.log(map2.get(key));
