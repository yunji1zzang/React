// 리액트에서 state는 컴포넌트 내부에서 바뀔 수 있는 값을 의미합니다.
// 앞서 props는 컴포넌트가 사용되는 과정에서 부모 컴포넌트가
// 설정하는 값이며, 컴포넌트 자신은 해당 props를 읽기 전용으로만
// 사용할 수 있습니다. 즉, props를 변경하려면 부모 컴포넌트에서 변경해 주어야 합니다. 
// 예를들어 지금 예제에서는 App.js 컴포넌트에서 Mycomponent를 사용할 때 
// props를 변경해 주어야 값이 변경 될 수 있습니다. 
// 여기서 MyComponent는 전달받은 name 값을 직접 바꿀 수 없습니다. 

// 리액트에는 두 가지 종류의 state가 있습니다.
// 하나는 클래스형 컴포넌트가 지니고 있는 state 이고,
// 다른 하나는 함수형 컴포넌트가 지니고 있는 useState라는 함수를 통해 state를 구현 합니다. 
// 먼저, 클래스형 컴포넌트의 state를 구현을 위해 새로운 Counter.js 컴포넌트를 작성해 봅니다. 

import React, { Component } from 'react';

class Counter extends Component {
    // 컴포넌트에서 state를 설정할 때는 다음과 같이 constructor 메서드를 작성하여 설정합니다.
    // constructor 메서드는 생성자 메서드이며, 클래스형 컴포넌트에서 constructor를 작성할 때는 
    // 반드시 super(props)를 호출해 주어야 합니다.
    // 이 함수가 호출되면 현재 클래스형 컴포넌트가 상속 받고 있는
    // 리액트의 component 클래스가 지닌 생성자 함수를 호출해 줍니다. 
    // 그 다음에는 this.state 값에 초깃값을 설정해 주었습니다. 
    // 참고로, 컴포넌트의 state는 객체 형식이어야 합니다. 
    constructor(props) {
        super (props);
        // state의 초깃값 설정하기 
        this.state = {
        number : 0
    };
}
// render() 함수 선언에서는 현재 state를 조회할 때는 this.state를 조회하면 됩니다. 
// 그리고, button 안에 onClick이라는 값을 props를 넣어 주었는데, 
// 이것은 버튼이 클릭될 때 호출시킬 함수를 설정할 수 있게 해줍니다.
// 이것을 우리는 이벤트를 설정한다고 합니다.
// 이벤트로 설정할 함수를 넣어줄 때는 화살표 함수 문법을
// 사용하여 넣어 주어야 합니다. 함수 내부에서는 this.setState라는
// 함수를 사용하며, 이 함수가 state 값을 바꿀 수 있게 해줍니다.
render() {
    // state를 조회할 때는 this.state로 조회합니다. 
    const {number} = this.state;
    return (
    <div>
        <h1>{number}</h1>
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