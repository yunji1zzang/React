// 함수형 컴포넌트에서 useState 사용하기
// 리액트 16.8 이전 버전에서는 함수형 컴포넌트에서 state를 사용할 수 없습니다.
// 하지만 16.8 이후 버전부터는 useState라는 함수를 사용하여 함수형 컴포넌트 에서도
// state를 사용할 수 있게 되었습니다.
// 앞서, Class형 컴포넌트에서의 state와 사용법은 조금 다릅니다. 
// 함수형 컴포넌트에서는 Hooks라는 것을 사용하게 되며,
// 다양한 Hooks 중에서 useState를 활용하게 됩니다. 

// 우선, 배열 비구조화 할당에 대한 개념 이해가 필요합니다. 
// 배열 비구조화 할당은 배열 안에 들어있는 값을 쉽게 추출할 수 있도록 해주는 문법입니다.

// [배열 비구조화 할당 참고 예시]
// const array = [1, 2];
// undefined
// const one = array[0];
// undefined
// const two = array[1];
// undefined
// console.log(array);
// VM276:1 (2) [1, 2]
// undefined
// console.log(one);
// VM320:1 1
// undefined
// console.log(two);
// VM353:1 2
// 이번에는 array 안에 있는 값을 one과 two에 담아주는 코드를
// 배열 비구조화 할당이라고 합니다. 
// const array=[1, 2];
// const [one, two] = array;
// console.log(array);
// [1, 2]
// console.log([one], [two]);
// [1]0: 1length: 1[[Prototype]]: Array(0) [2]

import React, {useState} from "react";

const Say = () => {
    // useState 함수의 인자에는 상태의 초깃값을 넣어 줍니다. 
    // 앞서, 클래스형 컴포넌트에서의 state 초깃값은 객체 형태를 넣어 주어야 했었습니다.
    // 그런데, useState 함수에서는 반드시 객체가 아니어도 상관 없습니다. 값의 형태는 자유입니다.
    // 즉, 숫자일 수도, 문자열일 수도, 객체일 수도, 배열일 수도 있습니다. 
    // 지금 예문에서는 함수를 호출하면 배열이 반환되며,
    // 배열의 첫 번째 원소는 현재 상태이고,
    // 두번째 원소는 상태를 바꾸어 주는 함수입니다.
    // 상태를 바꾸어주는 이 함수를 세터(Setter) 함수라고 부릅니다. 
    // 그리고, 배열 비구조화 할당을 통해 이름을 자유롭게 정해줄 수 있습니다. 
    // 지금 예문에서는 message와 setMessage라고 이름을 설정했는데,
    // 이것은 각각 text와 setText라고 이름을 자유롭게 변경해 주셔도 됩니다. 
    const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage('안녕하세요!');
    const onClickLeave = () => setMessage('안녕히 가세요!');

return(
    <div>
        <button onClick={onClickEnter}>입장</button>
        <button onClick={onClickLeave}>퇴장</button>
        <h1>{message}</h1>
    </div>
);
};
export default Say;