// 주석

/**
 * 여러줄 주석(이것도 주석이 됨)
 * 다음줄로 자동으로 넘어감
 */

/**
 *
 * Refer : https://developer.mozilla.org/ko/docs/Learn/JavaScript/First_steps/Variables
 * 변수 규칙
 * 라틴 문자(0-9, a-z, A-Z,)
 * 특수 문자 금지 (_,$ 둘은 예외)
 * 대소문자 구분
 * 추천 : camelCase(likeThis)
 * 한국어 no no
 * 주석은 한국인끼리 할 때는 ok ok
 * 예약어 no no (예약어 : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords)
 * 숫자로 시작x
 * 이모지 x
 * 여러개의 변수를 1,2,3, ... 숫자로 구분 x -> 최대한 의미있게, 구체적인 이름으로 작성!
 *
 */

let apple;
let redApple;

// 나쁜 예제
let num = 20; // 뭔 의미인지 알기 힘듬

// 좋은 예제
let myAge = 20; // 의미가 명확함

// 나쁜 예제
let audio1;
let audio2;

// 좋은 예제
let backgroundAudio;
let windAudio;

// 꿀팁!
let audioBackground;
let audioWind; // 무엇인지를 먼저 치고 구체적인 것을 뒤에

audioBackground; // 대분류 > 세부분류
