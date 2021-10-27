// useEffect는 리액트 컴포넌트가 렌더링될 때마다 특정 작업을
// 수행하도록 설정할 수 있는 Hook 입니다.
// 클래스형 컴포넌트의 componentDidMount와 componentDidUpdate를
// 합친 형태로 보아도 되십니다.

// 기존 Info 컴포넌트에 useEffect를 적용해 봅니다.

// 이번에는 useEffect에서 설정한 함수를 컴포넌트가 화면에 맨 처음
// 렌더링될 때만 실행하고, 업데이트될 때는 실행하지 않으려면
// 함수의 두 번째 파라미터로 비어 있는 배열을 넣어 주면 됩니다.
import React, {useState, useEffect} from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    useEffect(()=>{
        console.log('마운트될 때만 실행됩니다.');

    }, []);

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