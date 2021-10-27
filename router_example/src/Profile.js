import React from "react";

const data = {
    star: {
        name: '장나라',
        description: '리액트를 시작하는 개발자'
    },
    middle:{
        name: '김희선',
        description: '연예인'
    }
};

// match, location, history등의 객체 활용
// match의 속성인 params, isExact, url 등의 타입 활용
// match, props 참고 웹사이트 : https://basketdeveloper.tistory.com/51
const Profile = ({match}) => {
    const {username} = match.params;
    const profile = data[username];
    if(!profile){
        return <div>존재하지 않는 사용자입니다.</div>;
    }
    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    );
};

export default Profile;