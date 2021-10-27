// 게시판이나 유튜브 영상 목록은 자바스크립트의 배열을 사용합니다.
// 자바스크립트 배열은 다음과 같이 다양한 자료형을 저장할 수 있습니다.
// [예시] const numberList = [1, 2, 3, 4, 5]; // 숫자형
// const mixedList = [1, 'str', {}, function a() {}]; // 2개 이상의 자료형
// 다양한 자료형을 저장할 수 있다는 성질을 이용하면 XML와 JSX도 배열에 저장할 수 있습니다.
// JSX 배열 저장 : const componentList = [<MyComponent />, <MySecondComponent />, <b>Hi</b>];

// 다음은 위의 방법을 활용하여 가격표 목록을 출력하는 예제입니다.
// 배열 컴포넌트를 위한 map()함수의 활용 방법을 잘 알아두시기 바랍니다.
// 출력 결과는 App 컴포넌트에 ListExampe 컴포넌트를 포함시켜 확인하시기 바랍니다.

import React from "react";
import ListExample from "./03/ListExample";

class App extends React.Component {
  render() {
    return (
      // render()함수는 데이터가 변경되어 새 화면을 그려야 할 때 자동으로 호출되는 함수입니다.
      // render()함수가 return 반환하는 JSX를 화면에 그려줍니다.
      // 아래의 내용이 JSX 양식 입니다.
      // 아울러, ListExample 컴포넌트를 JSX 안에 마크업 형식으로 추가했습니다.
      <div className="body">
        <ListExample />
      </div>
    );
  }
}
export default App;
