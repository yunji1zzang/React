// JSX는 JavaScript XML의 줄임말로 '자바스크립트에 XML을 추가한 확장형 문법'입니다.
// 앞서 src폴더안에 App.js을 다음의 내용으로 코딩하고 yarn start 실행 확인해 보시기 바랍니다.

import React from "react";

class App extends React.Component{
  render(){
    return(
      <div>
        <div>안녕하세요~ 컴포넌트 테스트 입니다. ^^ </div>
      </div>
    );
  }
}
export default App;
