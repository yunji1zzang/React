import React, {useState} from "react";
import Info from './components/Info';

// 이제 App.js 컴포넌트에서 Info 컴포넌트의 가시성을 바꿀 수 있게
// 해 봅니다. 이번에도 useState를 사용하여 상태를 관리해 봅니다.
// 실행 결과를 보면, 컴포넌트가 나타날 때 콘솔에 effect가 나타나고,
// 사라질 때 cleanup이 나타납니다. 즉, 렌더링될 때마다 뒷정리 함수가
// 계속 나타나는 것을 확인할 수 있습니다.
// 그리고, 뒷정리 함수가 호출될 때는 업데이트 되기 직전의 값을
// 보여 줍니다.
const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button
        onClick = {() => {
          setVisible(!visible);
        }}
      >
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr />
      {visible && <Info />}
    </div>
  );
};

export default App;
