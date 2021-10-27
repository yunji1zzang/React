import React from 'react';

// props는 properties의 줄임표현이며, 
// 컴포넌트 속성을 설정할 때 사용하는 요소입니다. 
// props 값은 해당 컴포넌트를 불러와 사용하는 
// 부모 컴포넌트(지금 예제에서는 App.js 컴포넌트가
// 부모 컴포넌트입니다) 에서 설정 할 수 있습니다.

// 우선 MyComponent 컴포넌트를 해당 컴포넌트에서 name 이라는
// props를 렌더링 하도록 설정합니다. 
// props값은 컴포넌트 함수의 파라미터로 받아서 사용할 수 있습니다.
// 참고로, props를 렌더링 할 때는 JSX 내부에서 {} 기호로 감싸 주면 됩니다. 

const MyComponent = props => {
        return <div> 안녕하세요, 제 이름은 {props.name} 입니다. </div>;
};

MyComponent.defaultProps = {
    name: '기본이름'
};

export default MyComponent;