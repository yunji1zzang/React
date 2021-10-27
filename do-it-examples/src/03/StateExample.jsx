// 앞서 프로퍼티의 경우, 컴포넌트 내부에서 값을 바꿀 수 없는 특징을 갖고 있었습니다
// 하지만, 쇼핑몰에서 물건 수량을 입력하거나 상품에 댓글을 남기는 등 '값을 바꿔야 하는 경우'가 발생할 수 있기에,
// 이럴 경우에는 state를 사용하여 컴포넌트의 상태를 관리할 수 있습니다.
// state는 '값을 저장하거나 변경할 수 있는 객체'로 보통 버튼을 클릭하거나 값을 입력하는 등의 이벤트와 함께 사용합니다.
// 예를 들어, 어떤 버튼을 눌렀을 때, 버튼 색을 변경하거나 글씨 모양을 바꿀 때 사용합니다.
// 다음은 state를 사용하여 setTimeout()함수를 통해 4초 후 state에 저장되어 있는 값을 변경하는 예제입니다
// 03폴더에 StateExample 컴포넌트를 만들어 다음 소스를 코딩합니다.

import React, { Component } from "react";

class StateExample extends React.Component {
  constructor(props) {
    super(props);
    // state(상태) 정의
    // 컴포넌트에서 관리하려는 변수 state 초깃값을
    // this.state에 객체 형태로 정의합니다.
    this.state = {
      loading: true,
      formData: "no data",
    };

    // 이후 콜백 함수를 다룰 때 bind(this)를 선언하는 부분에 대해 다룹니다.
    // 함수로 넘어갈 this는 반드시 생성자에서 bind() 함수로
    // 묶어주어야 합니다.
    // 즉, bind() 함수로 묶어서 넘겨줘야 합니다.
    this.handleData = this.handleData.bind(this);
    // 생성 후 4초 후에 handleData 함수를 호출합니다.
    // setTimeout() 함수를 사용해서 4초 후에 handleData()함수를
    // 호출합니다.
    setTimeout(this.handleData, 4000);
  }

  handleData() {
    const data = "new data";
    // 컴포넌트 특수 변수 this.state를 사용하여 sate값에 접근합니다.
    const { formData } = this.state;
    // state(상태) 변경
    // 컴포넌트의 내장 함수 this.setState()를 사용하여 state값을 변경합니다.
    this.setState({
      loading: false,
      formData: data,
    });
    // this.state.loading 은 현재 true입니다.
    // 이후 호출될 출력함수에서의 this.state.loading은 false입니다.
  }

  render() {
    return (
      <div>
        {/* state(상태) 데이터는 this.state로 접근 가능합니다. */}
        <span>로딩중: {String(this.state.loading)}</span>
        <br />
        <span>결과: {this.state.formData}</span>
      </div>
    );
  }
}

export default StateExample;
