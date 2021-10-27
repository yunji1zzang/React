import React from "react";
import { Link, Route } from "react-router-dom";
import Profile from "./Profile";

const Profiles = () => {
    return (
        <div>
            <h3>사용자 목록:</h3>
            <ul>
                <li>
                    <Link to ="/profiles/star">star</Link>
                </li>
                <li>
                    <Link to ="/profiles/middle">middle</Link>
                </li>
            </ul>

            <Route
                path="/profiles"
                // exact={true} 대신 exact 라고 축약 표현도 가능함
                exact
                render={() => <div>사용자를 선택해 주세요!</div>}
                />
            <Route path="/profiles/:username" component={Profile}/>
        </div>
    );
};

export default Profiles;