// (기존) 데이터 배열을 컴포넌트 배열로 변환하기
// 즉, 기존 배열로 컴포넌트로 구성된 배열을 생성해 봅시다. 

import React from 'react';

const IterationSample = () => {
    // 문자열로 구성된 배열을 선언합니다. 
    const names = ['눈사람', '얼음', '눈', '바람'];
    // 앞서 문자열로 구성된 배열값을 사용하여 
    // <li>...</li> JSX 코드로 된 배열을 새로 생성한 후
    // nameList에 담습니다.
    // 참고로, map 함수에서 JSX를 작성할 때는 DOM 요소를 작성해도 되고,
    // 컴포넌트를 사용해도 됩니다. 
    const nameList = names.map(name => <li>{name}</li>);
    return <ul>{nameList}</ul>;

};

export default IterationSample;