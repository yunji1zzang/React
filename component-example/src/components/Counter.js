// 리액트에서 state는 컴포넌트 내부에서 바뀔 수 있는 값을 의미합니다.
// 앞서 props는 컴포넌트가 사용되는 과정에서 부모 컴포넌트가
// 설정하는 값이며, 자식 컴포넌트 자신은 해당 props를 읽기 전용으로만
// 사용할 수 있습니다. 즉, props를 변경하려면 부모 컴포넌트에서
// 변경해 주어야 합니다. 예를들어 지금 예제에서는 App.js 컴포넌트에서
// MyComponent를 사용할 때 props를 변경해 주어야 값이 변경될 수
// 있습니다. 여기서 MyComponent는 전달받은 name값을 직접 바꿀 수 
// 없습니다.

// 리액트에는 두 가지 종류의 state가 있습니다.
// 하나는 클래스형 컴포넌트가 지니고 있는 state이고,
// 다른 하나는 함수형 컴포넌트에서 useState라는 함수를 통해
// state를 구현 합니다.

// 먼저, 클래스형 컴포넌트의 state를 구현을 위해
// 새로운 Counter.js 컴포넌트를 작성해 봅니다.

// 이번에는 state 객체 안에 여러 값이 있을 때 구현 방법을 실습해 보겠습니다.

import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        // state의 초깃값 설정하기
        // 현재 state 안에 fixedNumber라는 또 다른 값을 추가해 주었습니다.
        // 버튼이 클릭될 때 fixedNumber값은 그대로 두고 number값만
        // 바꾸게 됩니다.그래서, this.setState 함수를 사용할 때
        // 인자로 전달되는 개체 내부에 fixedNumber를 넣어 주지 않았습니다.
        // 여기서, this.setState 함수는 인자로 전달된 객체 안에 들어 있는
        // 값만 바꾸어 줍니다.
        this.state = {
            number: 0,
            fixedNumber: 0
        };

    }
    render() {
        // state를 조회할 때는 this.state로 조회합니다.
        const {number, fixedNumber} = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
                <button
                // onClick을 통해 버튼이 클릭되었을 때
                // 호출할 함수를 지정합니다.
                onClick={() => {
                    // this.setState를 사용하여
                    // state에 새로운 값을 넣을 수 있습니다.
                    this.setState({number: number+1});
                }}
                > +1
            </button>    
            </div>
        );
    }
}

export default Counter;