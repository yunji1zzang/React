import React, { Component } from 'react';
import Child from './components/Child';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log('부모컴포넌트 => constructor 호출');
  }

  render() {
    console.log('부모컴포넌트 => render 호출');
    return <Child />;
  }

  componentDidMount() {
    console.log('부모컴포넌트 => componentDidMount 호출');
    this.setState({ updated: true });
  }
componentDidUpdate() {
    console.log('부모컴포넌트 => componentDidUpdate 호출');
  }
}

export default App; 
