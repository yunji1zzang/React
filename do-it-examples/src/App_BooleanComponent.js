// JSX는 JavaScript XML의 줄임말로 '자바스크립트에 XML을 추가한 확장형 문법'입니다.
// 앞서 src폴더안에 App.js을 다음의 내용으로 코딩하고 yarn start 실행 확인해 보시기 바랍니다.

import React from "react";
import BooleanComponent from "./03/BooleanComponent";

class App extends React.Component{
  render(){
    return(
      // 03폴더 BooleanComponent에서
      // const message = this.props.bored
      // ? "놀러 가자"
      // : "하던 일 열심히 마무리하기";
      // 실행 결과를 보면 프로퍼티의 이름만 전달한 경우에는 '놀러 가자'라는 문장이,
      // 프로퍼티의 이름을 전달하지 않은 경우에는 '하던 일 열심히 마무리하기'가 출력됩니다.
      // 이 방법은 실무에서 자주 사용하므로 꼭 알아두시기 바랍니다.
      <div>
        <div><b>지루할 때: </b><BooleanComponent bored /></div>
        <div><b>즐거울 때: </b><BooleanComponent /></div>
      </div>
    );
  }
}
export default App;

