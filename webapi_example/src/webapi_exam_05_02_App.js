import React from "react";
import CallbackFunc from "./components/CallbackFunc";


function App(){
  return (
    <div>
      <h1>Start React 2021!</h1>
      {/* 콜백 함수를 사용해 원하는 순서대로 코드를 실행할 수 있습니다.
          CallbackFunc.js 컴포너트의 10행에서 1을 파라미터로 넣고
          함수를 호출했고 2를 반환할 때까지 기다렸다가 15행에서
          다시 logPrint 함수를 호출했습니다. 하지만 콜백 함수가
          증가할수록 함수 안에 또 다른 함수를 계속 추가해야 합니다.
          이런 형태를 "콜백 지옥"이라고 합니다. 콜백 함수를 여러 번
          사용할수록 코드가 더 지저분해질 수 있다는 단점이 있습니다. */}
      <CallbackFunc />
    </div>
  );
};

export default App;