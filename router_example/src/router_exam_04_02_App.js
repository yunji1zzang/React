import React from 'react';
import { Link, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profile from './Profile';

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
        <li>
          <Link to="/profile/star">star 프로필</Link>
        </li>
        <li>
          <Link to="/profile/middle">middle 프로필</Link>
        </li>
      </ul>
      <Route path="/" component={Home} exact={true} />
      <Route path={["/about", '/info']} component={About} />
      <Route path="/profile/:username" component={Profile} />
    </div>
  );
};

export default App;