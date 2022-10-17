let count = 0;

// export default는 모듈에서 단 하나만 export할 때 사용할 수 있음
export function increase() {
    count ++;
    console.log(count);
}

export function getCount() {
    return count;
}
