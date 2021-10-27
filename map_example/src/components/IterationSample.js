// 각 항목을 더블클릭했을 때, 해당 항목이 화면에서 사라지는 기능을
// 구현해 보겠습니다. 이때도 불변성을 유지하면서 업데이트해 주어야 합니다.
// 불변성을 유지하면서 배열의 특정 항목을 지울 때는
// 배열의 내장 함수 filter를 사용합니다.

// 이제 filter 함수를 사용하여 IterationSample 컴포넌트의 항목 제거
// 기능을 구현해 봅니다. HTML 요소를 더블클릭할 때 사용하는
// onDoubleClick을 사용하고, onRemove라는 함수를 만들어서
// 각 li 요소에 이벤트 등록을 해줍니다.
import React, {useState} from 'react';

const IterationSample = () => {
    
    const [names, setNames] = useState([
        {id: 1, text: '눈사람'},
        {id: 2, text: '얼음'},
        {id: 3, text: '눈'},
        {id: 4, text: '바람'}
    ]);
    const [inputText, setInputText] = useState('');
    // 새로운 항목을 추가할 때 사용할 id
    const [nextId, setNextId] = useState(5);

    const onChange = e => setInputText(e.target.value);
    // 버튼을 클릭했을 때 호출할 onClick 함수를 선언하여
    // 버튼의 onClick 이벤트로 설정합니다.
    const onClick = () => {
        const nextNames = names.concat({
            id: nextId, // nextId 값을 id로 설정하고
            text: inputText
        });
        setNextId(nextId + 1); // nextId 값에 1을 더해 준다.
        setNames(nextNames); // names 값을 업데이트한다.
        setInputText(''); // inputText를 비운다.
    };
    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    };
                                                     // key 설정
    const nameList = names.map(name => <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
        {name.text}
        </li>
        );
    
    return(
        <>
        <input value={inputText} onChange={onChange} />
        <button onClick={onClick}>추가</button>
        <ul>{nameList}</ul>
        </>
    );
};

export default IterationSample;