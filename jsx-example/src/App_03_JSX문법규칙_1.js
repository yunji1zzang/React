// 코드 상단 import 구문에서 react 모듈에 들어 있는
// Fragment 컴포넌트를 추가로 불러옵니다.
import React, {Fragment} from 'react';

// JSX 문법 규칙 (1)
// 컴포넌트에 여러 태그가 있다면 반드시 부모 태그 하나로 감싸야 한다.
// 여기서는 h1 태그, h2 태그를 부모 태그인 div 태그로 감싸고 있다.
// div 태그를 사용하고 싶지 않을 때는 리액트 v16 버전 이상부터 도입된
// Fragment 기능을 적용하면 된다. 이때, Fragment는 축약 표현도 가능하다.

function App(){
  return (
    <>
      <h1>리액트 안녕!</h1>
      <h2>잘 작동하니?</h2>
    </>
  )
}

export default App;
