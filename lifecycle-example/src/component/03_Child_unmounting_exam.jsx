import React, { Component } from "react";
import Descendant from "./Descendant";

class Child extends Component {
  constructor(props) {
    super(props);
    console.log("자식컴포넌트 => constructor 호출");
  }

  render() {
    console.log("자식컴포넌트 => render 호출");
    return <Descendant />;
  }

  componentDidMount() {
    console.log("자식컴포넌트 => componentDidMount 호출");
  }

  componentDidUpdate() {
    console.log("자식컴포넌트 => componentDidUpdate 호출");
  }

  componentWillUnmount() {
    console.log("자식컴포넌트 => componentWillUnmount 호출");
  }
}

export default Child;
