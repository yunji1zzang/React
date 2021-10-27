// useEffect는 리액트 컴포넌트가 렌더링될 때마다 특정 작업을
// 수행하도록 설정할 수 있는 Hook 입니다.
// 클래스형 컴포넌트의 componentDidMount와 componentDidUpdate를
// 합친 형태로 보아도 되십니다.

// 기존 Info 컴포넌트에 useEffect를 적용해 봅니다.

// 이번에는 특정 값이 변경될 때만 호출하고 싶은 경우
// 즉, 특정 값이 업데이트될 때만 실행하고 싶은 경우에는
// useEffect의 두 번째 파라미터로 전달되는 배열 안에
// 특정 값을 넣어주면 됩니다.
import React, {useState, useEffect} from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    useEffect(()=>{
        console.log(name);

    }, [name]);

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