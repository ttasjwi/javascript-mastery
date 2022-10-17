
// 주석 : Comments
// 한줄짜리 주석을 작성할 때 씀
// TODO(땃쥐) : 해야할 일을 작성
// TODO(땃쥐) : XX 기능 구현하기

/**
 * 여러줄 주석
 * 주석은 코드 자체를 설명하는 것이 아니라,
 * 왜(WHY)와 어떻게(HOW)를 설명하는 것이 좋음.
 * (단, 정말 필요한 경우에만)
 */

// 외부에서 많이 쓰이는 Public한 API인 경우, JSDoc을 사용하면 좋다.

/**
 * 주어진 두 인자를 더한 값을 반환함
 * @param a : number 숫자1
 * @param b : number 숫자2
 * @returns {number}  number a,b를 더한 값
 */
function add(a, b) {
    return a+b;
}

const result = add(1,2);
console.log(result);
