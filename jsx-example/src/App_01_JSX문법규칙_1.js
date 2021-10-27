import React from 'react';

// JSX 문법 규칙 (1)
// 컴포넌트에 여러 태그가 있다면 반드시 부모 태그 하나로 감싸야 한다.
// 여기서는 h1 태그, h2 태그를 부모 태그인 div 태그로 감싸고 있다.

function App(){
  return (
    <div>
      <h1>리액트 안녕!</h1>
      <h2>잘 작동하니?</h2>
    </div>
  )
}

export default App;
