import React from "react";
import { Route, Link } from 'react-router-dom';
import About from "./About";
import Home from "./Home";
import Profiles from "./Profiles";


const App = () => {
  // Home을 위한 Route 컴포넌트를 사용할 때 exact={true} 의미는
  // exact 라는 props를 true로 설정한다는 것입니다.
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
          <Link to="/profiles">프로필</Link>
        </li>  
      </ul>   
      <hr />
      <Route path="/" component={Home} exact={true} />
      <Route path={["/about", '/info']} component={About} />
      <Route path="/profiles" component={Profiles} />
    </div>
  );
};

export default App;