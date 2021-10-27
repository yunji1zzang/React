// JSX는 JavaScript XML의 줄임말로 '자바스크립트에 XML을 추가한 확장형 문법'입니다.
// 앞서 src폴더안에 App.js을 다음의 내용으로 코딩하고 yarn start 실행 확인해 보시기 바랍니다.

import React from "react";

// 03폴더에 새로 작성한 TodaysPlan 컴포넌트를 불러들입니다.
import TodaysPlan from './03/TodaysPlan';

// Import문에서 파일 이름의 확장자 js 또는 jsx가 생략된 이유
// create-react-app은 js 또는 jsx 파일의 확장자를 생략해도 해당 파일을 자동으로 찾을 수 있게 설정되었습니다.
// 이렇게 자동으로 임포트할 수 있는 이유는 '웹팩 코드 검색 확장자(webpack modul resolution)' 기능 덕분입니다.
// 웹팩은 임포트된 파일을 분석하여 하나의 자바스크립트 파일을 생성할 때 파일 위치를 검색합니다. 이때 확장자 기능을 참조합니다. 
// 다음은 create-react-app의 웹팩 코드 검색 확장자의 파일 검색 순서를 나타냅니다.
// 1. 확장자가 파일 이름에 있는 파일을 먼저 임포트합니다.
// 2. 확장자가 파일 이름에 없는 경우 웹팩의 확장자 옵션(extentions)에 정의된 확장자 목록을 보고
//    해당 확장자 이름을 포함한 파일이 있는지 확인하여 임포트합니다.
//    예를 들어, import 'MyFile';의 경우, MyFile.js > MyFile.jsx 순서로 파일을 확인하여 임포트합니다.
// 3. 만약 지정 경로에 해당 파일이 없으면 같은 이름의 폴더는 없는지 검색합니다.
//    같은 이름의 폴더가 있다면 그 안에 있는 index 파일을 검색합니다.
//    예를 들어, import 'MyComponent';의 경우 MyComponent.js > MyComponent.jsx 순서로 확인합니다.
//    파일이 없으면 MyComponent 폴더를 검색하고 해당 폴더가 있는 경우 폴더 안에서 index.js > index.jsx 순서로 파일을 확인하여 임포트합니다.
// 컴포넌트 주요 구성 요소는 데이터 구성요소 기준 프로퍼티(상위 컴포넌트에서 하위 컴포넌트로 전달되는 읽기 전용 데이터입니다),
// state(컴포넌트의 상태를 저장하고 변경할 있는 데이터입니다), 컨텍스트(부모 컴포넌트에서 생성하여 모든 자식 컴포넌트에 전달하는 데이터입니다)

class App extends React.Component {
  render() {    
    return (
      // render()함수는 데이터가 변경되어 새 화면을 그려야 할 때 자동으로 호출되는 함수입니다.
      // render()함수가 return 반환하는 JSX를 화면에 그려줍니다.
      // 아래의 내용이 JSX 양식 입니다.
      // 아울러, TodaysPlan 컴포넌트를 JSX 안에 마크업 형식으로 추가했습니다.
      <div className="body">        
         <TodaysPlan />
      </div>
    );
  }
}
export default App;
