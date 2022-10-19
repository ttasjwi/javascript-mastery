/**
 * JSON : JavaScript Object Notation
 * 서버와 클라이언트(브라우저, 모바일) 간의 HTTP 통신을 위한
 * 오브젝트 형태의 텍스트 포맷
 * stringify(object) : JSON
 * parse(JSON): Object
 */

const ttasjwi = {
    name: 'ttasjwi',
    age: 20,
    eat: () => { // 함수는 프로퍼티가 아니므로 json에 전달되지 않는다.
        console.log('eat');
    }
};
console.log(ttasjwi)


// 객체를 json 문자열으로(직렬화, Serializing)
const json = JSON.stringify(ttasjwi);
console.log(json);


// json 문자열을 객체로 변화(역질렬화, Deserializing)
const obj = JSON.parse(json); // json으로 객체로
console.log(obj);
