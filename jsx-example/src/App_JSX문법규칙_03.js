import React from 'react';

// JSX 문법 규칙 (3)
// JSX 내부의 자바스크립트 표현식에서 if문을 사용할 수 는 없습니다. 
// 하지만 조건에 따라 다른 내용을 렌더링해야 할 때는
// JSX 밖에서 if문을 사용하여 사전에 값을 설정하거나,
// {} 안에 조건부 면산자를 사용하면 됩니다. 

function App(){
  const name = '장나라';
  return (
    <div>
    {name === '장나라' 
    ? (<h1>장나라 입니다.</h1>)
      :
      (<h2>장나라가 아닙니다.</h2>)
      }
      </div>
  )}

export default App;
