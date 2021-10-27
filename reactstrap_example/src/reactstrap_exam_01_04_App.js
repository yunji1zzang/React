// bootstrap은 프론트엔드 디자인을 쉽게 구현할 수 있도록 도와주는
// html, css, js 등 구현을 위한 layout 프레임워크 입니다.
// bootstrap을 React에서 사용할 수 있도록 패키지로 만든 것이
// reactstrap입니다. 여기서, Alerts 패키지는 알림 영역에 대한
// 기능을 제공합니다. 우선, npm을 활용해서 reactstrap을 설치해 줍니다.
// C:\reactstart\reactstrap_example>npm install -save reactstrap
// reactstrap은 bootsrap css를 포함하고 있지 않기 때문에
// 다음과 같이 bootstrap도 npm으로 설치해 줍니다.
// C:\reactstart\reactstrap_example>npm install -save bootstrap
// yarn 또는 npm으로 설치시 index.js(또는 App.js)에 다음의 구문을
// 추가해 주시기 바랍니다.
// import 'bootstrap/dist/css/bootstrap.css'; 

import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ReactstrapAlerts from "./components/ReactstrapAlerts";

function App(){
  return (
    <div>
      <h1>Start React 2021!</h1>
      <p>CSS 적용하기</p>
      <ReactstrapAlerts />
    </div>
  );
};

export default App;