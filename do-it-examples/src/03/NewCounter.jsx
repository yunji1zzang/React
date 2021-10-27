// NewCounter 컴포넌트는 getDerivedStateFromProps() 함수를 사용하여
// 변경된 프로퍼티 값으로 state 값을 갱신합니다.

import React from "react";

class NewCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.increaseCount = this.increaseCount.bind(this);
  }
  // static getDerivedStateFromProps(props, state) 함수
  // getDerivedStateFromProps() 함수는 정적 함수이며,
  // 따라서, 함수 안에서 this.props나 this.state와 같은 방법으로
  // 프로퍼티나 state값에 접근할 수 없습니다.
  // 만약, 각 값에 접근해야 하는 경우 반드시 인자로 전달된
  // props, state를 이용해야 합니다.
  // 이때 props는 상위 컴포넌트에서 전달된 값이며,
  // state는 현재 컴포넌트의 state값 입니다.
  // 이 함수는 상위 컴포넌트에서 전달받은 프로퍼티로
  // state 값을 연동할 때 주로 사용되며,
  // 반환값으로 state를 변경합니다.

  static getDerivedStateFromProps(props, state) {
    const { count } = props;
    return {
      // 프로퍼티에서 전달된 count값을 보관한다.
      count,
      newCount:
        count === state.count
          ? // count 프로퍼티가 변경되지 않으면 기존 sate값으로
            // 설정한다.
            state.newCount
          : // 프로퍼티가 변경되었다면 변경된 프로퍼티값으로 설정한다.
            count, // 조건 연산식 => A ? B : C
    };
  }

  increaseCount() {
    this.setState(({ newCount }) => ({ newCount: newCount + 1 }));
  }

  render() {
    return (
      <div>
        현재 카운트: {this.state.newCount}
        <button onClick={this.increaseCount}>카운트 증가</button>
      </div>
    );
  }
}

// APP 컴포넌트가 전달한 최초의 프로퍼티값을 state.count에 저장되며,
// NewCounter 컴포넌트는 state.newCount로 증가값을 따로 분리하여
// 관리합니다. state.count가 아니라 state.newCount로 증가값을
// 관리하는 이유는 getDerivedStateFromProps()함수는
// 다른 프로퍼티가 변경되어도 호출되기 때문입니다.
// count프로퍼티가 변경되었는지 비교하려면 이처럼 값을 따로
// 관리해야 합니다.

export default NewCounter;
