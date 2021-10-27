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
  componentDidMount() {
    console.log("자식컴포넌트 => componentDidMount 호출");
    this.setState({ updated: true });
  }
  componentDidUpdate() {
    console.log("자식컴포넌트 => componentDidUpdate 호출");
  }
}
export default Child;
