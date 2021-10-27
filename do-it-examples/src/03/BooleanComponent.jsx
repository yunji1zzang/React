import React from "react";
// 프로퍼티는 상위 컴포넌트가 하위 컴포넌트에 값을 전달할 때 사용합니다
// 이때, 프로퍼티값은 수정할 수 없다는 특징이 있습니다.
// 프로퍼티에 문자열을 전달할 때는 큰따옴표(" ")를 사용합니다
// 하지만, 숫자형이나 불리언 등의 값을 전달할 때는 큰 따옴표를 사용할 수 없습니다.
// 예를들어 value="123"이나 value="true"와 같은 방법으로 숫자형이나 불리언값을
// 프로퍼티에 전달하면 그냥 문자열로 인식됩니다.
// 리액트에서 문자열 외의 값은 따옴표 대신 중괄호({ })를 사용해야 합니다.
import PropTypes from "prop-types";

// 불리언 프로퍼티를 사용할 경우, 불리언은 true 또는 false만 정의할 수 있는 특수한 자료형입니다
// 불리언값은 true의 경우 프로퍼티 이름만 선언해도 전달할 수 있습니다. <ChildComponent boolValue />
// 불리언값의 false는 이름을 생략하면 됩니다. 불리언 프로퍼티에 false를 전달할 경우, <ChildComponent />
class BooleanComponent extends React.Component {
  render() {
    // 불리언 타입을 조건문에 적용한 예제
    const message = this.props.bored
      ? "놀러 가자"
      : "하던 일 열심히 마무리하기";
    return <div className="message-container">{message}</div>;
  }
}

export default BooleanComponent;
