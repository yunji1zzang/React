// useEffect는 리액트 컴포넌트가 렌더링될 때마다 특정 작업을
// 수행하도록 설정할 수 있는 Hook 입니다.
// 클래스형 컴포넌트의 componentDidMount와 componentDidUpdate를
// 합친 형태로 보아도 되십니다.

// 기존 Info 컴포넌트에 useEffect를 적용해 봅니다.
// useEffect는 기본적으로 렌더링되고 난 직후마다 실행되며,
// 두번째 파라미터 배열에 무엇을 넣는지에 따라 실행되는 조건이 달라집니다.
// 컴포넌트가 언마운트되기 전이나 업데이트 되기 직전에 어떠한 작업을
// 수행하고 싶다면 useEffect에서 뒷정리(cleanup) 함수를 반환해
// 주어야 합니다.

// 이번에는 뒷정리(cleanup) 함수를 적용해 보겠습니다.

import React, {useState, useEffect} from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    useEffect(()=>{
        console.log('effect');
        console.log(name);
        return () => {
            console.log('cleanup');
            console.log(name);
        };
    });

    const onChangeName = e => {
        setName(e.target.value);
    };

    const onChangeNickname = e => {
        setNickname(e.target.value);
    };

    return(
        <>
        <div>
            <input value={name} onChange={onChangeName} />
            <input value={nickname} onChange={onChangeNickname} />
        </div>
        <div>
            <div>
                <b>이름:</b> {name}
            </div>
            <div>
                <b>닉네임:</b> {nickname}
            </div>
        </div>
        </>
    );
};

export default Info;