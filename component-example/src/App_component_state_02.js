// 리액트 컴포넌트를 사용할 때 컴포넌트 태그 사이의 내용을
// 보여주는 props인 children 활용 예제 코딩!
// 다음에서 MyComponent 태그 사이에 작성한 "장나라" 문자열을
// MyComponent 내부에서 보여 주려면
// props.children 값을 선언해 주어야 합니다.

import React from "react";
import Counter from "./components/Counter";

const App = () => {
  return <Counter />;
};

export default App;
