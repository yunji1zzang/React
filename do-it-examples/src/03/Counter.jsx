// 리액트 생명주기 함수 사용 : 카운터 프로그램 코딩
// 다음은 부모 컴포넌트부터 count의 초깃값을 전달받아 숫자를 증가하는
// 카운터 프로그램입니다.
// 여기서는 getDerivedStateFromProps()함수의 동작 원리도 알아보기 위해
// 2가지의 컴포넌트를 만들어 state에 저장되는 값을 변경해 봅니다.
// 우리가 만들 Counter컴포넌트는 state의 초깃값을 설정할 때
// props.count와 같이 프로퍼티로 받은 값을 사용합니다.

import React from "react";

class Counter extends React.Component {
  // constructor(props) 함수는 이름 그대로 '맨 처음에 생성될 때
  // 한번만 호출'되며, 상태(state 또는 객체 변수)를 선언할 때
  // 사용됩니다.
  // constructor() 함수를 정의할 때는 항상 super() 함수를
  // 가장 위에 호출해야 합니다.
  // super() 함수에는 프로퍼티와 생명 주기 상태 등을 초기화하는
  // 중요한 과정을 포함합니다.
  constructor(props) {
    super(props);
    this.state = {
      // count 초깃값을 프로퍼티에 전달된 값으로 설정한다.
      count: props.count,
    };
    this.increaseCount = this.increaseCount.bind(this);
  }
  increaseCount() {
    this.setState(({ count }) => ({ count: count + 1 }));
  }
  render() {
    return (
      <div>
        현재 카운트 : {this.state.count}
        <button onClick={this.increaseCount}>카운트 증가</button>
      </div>
    );
  }
}

export default Counter;
