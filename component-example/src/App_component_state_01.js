// 리액트에서 state는 컴포넌트 내부에서 바뀔 수 있는 값을 의미합니다.
// 앞서 선언한 Counter 컴포넌트를 App.js 컴포넌트에서 불러와 렌더링 구현합니다. 

import React from "react";
import Counter from "./components/Counter";

const App = () => {
  return <Counter />;
};

export default App;
