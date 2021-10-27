import React from 'react';

// JSX 문법 규칙 (4)
// 리액트에서 DOM 요소에 스타일을 적용할 때는 문자열 형태로 넣는 것이
// 아니라 객체 형태로 넣어 주어야 합니다. 스타일 이름 중에서
// background-color 처럼 - 문자가 포함되는 이름이 있는데,
// 이 경우, 이러한 이름은 - 문자를 없애고 카멜 표기법으로 작성해야
// 합니다. 따라서, 앞서 background-color는 backgroundColor로
// 작성합니다.
// 앞서 style 객체를 미리 선언하고 div의 style 값으로 지정해 주었는데,
// 이번에는 미리 선언하지 않고 바로 style 값을 지정하고 싶다면
// 다음과 같이 작성하시면 됩니다.

function App(){
  const name = '장나라';
  
  return(
    <div
    style = {{
      // background-color는 backgroundColor와 같이 -가 사라지고
      // 카멜 표기법으로 작성됩니다.
      backgroundColor: 'black',
      color: 'aqua',
      fontSize: '48px', // font-size는 fontSize로 표현함
      fontWeight: 'bold', // font-weight는 fontWeight로 표현함
      padding: 16 // 단위를 생략하면 px로 지정됩니다.
    }}
    >    {name} </div>
    );
}

export default App;
