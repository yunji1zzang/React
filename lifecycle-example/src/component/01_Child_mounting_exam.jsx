import { Component } from "react";

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("자식컴포넌트 => constructor 호출");
  }

  render() {
    console.log("자식컴포넌트 => render 호출");
    return null;
  }
}

export default Child;
