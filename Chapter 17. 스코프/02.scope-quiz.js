const text = 'global'; // 전역 변수, 전역 스코프(글로벌 변수, 글로벌 스코프)
{
    const text = 'inside block'; // 지역 변수(로컬 변수), 지역 스코프(로컬 스코프)
    {
        console.log(text); // 변수명이 같을 경우, 가장 인접한 곳에 있는 변수를 우선시하여 참조한다.
    }
}
