import React from 'react';
import { Link, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';

const App = () => {
  // Home을 위한 Route 컴포넌트를 사용할 때 exact={true} 의미는
  // exact라는 props를 true로 설정한다는 것입니다.
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
      </ul>
      <Route path="/" component={Home} exact={true} />
      <Route path="/about" component={About} />
    </div>
  );
};

export default App;