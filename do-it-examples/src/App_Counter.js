// 앞서 Counter 컴포넌트와 NewCounter 컴포넌트를
// App 컴포넌트에 포함시켜 화면에 출력해 봅니다.

import React from "react";
import Counter from './03/Counter';
import NewCounter from './03/NewCounter';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {count:10};
    this.resetCount = this.resetCount.bind(this);
  }
  resetCount(){
    this.setState(({count}) => ({count:count+10}));
  }
  render(){
    return(
      <div>
        <div>
          <Counter count={this.state.count} />
        </div>
        <div>
          <NewCounter count={this.state.count} />
        </div>
        <button onClick={this.resetCount}>
          {this.state.count + 10}으로 초기화
        </button>
      </div>
    );
  }
}
// 리액트 서버를 구동해 보면 두 컴포넌트 모두 App 컴포넌트의
// this.state.count로 프로퍼티를 초기화합니다.
// 즉, 동일한 숫자(10)부터 카운트하기 시작합니다.
// 그런데, [20으로 초기화]버튼을 누르면 Counter 컴포넌트의 숫자는
// 20으로 초기화되지 않습니다.
// NewCounter 컴포넌트만 getDerivedStateFromProps()함수로
// APP 컴포넌트부터 갱신된 프로퍼티값을 동기화했기 때문입니다.
// Counter 컴포넌트는 처음 생성될 때만 프로퍼티 값으로
// state 값을 설정하므로 갱신 과정에서는 state 값이 변경되지 앖습니다.
export default App;
