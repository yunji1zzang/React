import React, { Component } from 'react';
import Child from './components/Child';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { hasDestoryed: false };
    console.log('부모컴포넌트 => constructor 호출');
  }

  render() {
    console.log('부모컴포넌트 => render 호출', this.state);
    return (
      <React.Fragment>
        {this.state.hasDestoryed ? null : <Child />};
      </React.Fragment>
    );
  }

  componentDidMount() {
    console.log('부모컴포넌트 => componentDidMount 호출');
    this.setState({ hasDestoryed: true });
  }

  componentDidUpdate() {
    console.log('부모컴포넌트 => componentDidUpdate 호출');
  }

  componentWillUnmount() {
    console.log('부모컴포넌트 => componentWillUnmount 호출');
  }
}

export default App;
