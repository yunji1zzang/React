// key = 리액트에서 key는 컴포넌트 배열을 렌더링 했을 때
// 어떤 원소에 변동이 있었는지 알아내려고 사용합니다. 
// key 값을 설정할 때는 map 함수의 인자로 전달되는 함수 내부에서
// 컴포넌트 props를 설정하듯이 설정하시면 됩니다.
// key 값은 언제나 유일해야 합니다. 따라서 데이터가 가진 고유값을
// key 값으로 설정해야 합니다. 
// 그런데, 앞서 예문에서는 컴포넌트에 고유 번호 식별 key 설정이 
// 되어 있지 않았습니다. 그러면, 이번에는 map 함수에 전달되는
// 콜백 함수의 인수인 index 값을 사용해 보겠습니다. 
import React from 'react';

const IterationSample = () => {
    // 문자열로 구성된 배열을 선언합니다. 
    const names = ['눈사람', '얼음', '눈', '바람'];
    const nameList = names.map((name, index) => <li key = {index}> {name} </li>);
    // 여기서는 고유한 값이 없을 때만 index 값을 key로 사용해야 합니다. 
    // 왜냐하면 index를 key로 사용하면 배열이 변경될 때 효율적으로
    // 리렌더링하지 못하기 때문입니다. 
    return <ul> {nameList} </ul>;
};

export default IterationSample;