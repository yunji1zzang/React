// 앞서 index 값을 key로 사용하면 리렌더링이 비효율적이라고 했는데, 
// 이러한 상황에서 고유값을 만드는 방법을 실습해 보겠습니다.
// 여기서는 앞서와 같이 보정된 배열을 렌더링하는 것이 아닌,
// 동적인 배열을 렌더링하는 것을 구현해 보겠습니다. 

// 먼저, IterationSample 컴포넌트에서 useState를 사용하여
// 상태를 설정하겠습니다.
// 여기서 세 가지 상태를 사용할 텐데, 하나는 데이터 배열이고,
// 다른 하나는 텍스트를 입력할 수 있는 input의 상태입니다. 
// 그리고, 마지막 하나는 데이터 배열에서 새로운 항목을
// 추가할 때 사용할 고유 id를 위한 상태입니다. 

// 그리고, 배열을 설정할 때, 앞서 예문에서는 단순히 문자열로 이루어진
// 배열을 만들었지만, 이번 객체 형태로 이루어진 배열을 만들겠습니다. 
// 이때, 해당 객체에는 문자열과 고유 id 값이 있습니다. 
import React, {useState} from 'react'; 

const IterationSample = () => {
    // 문자열로 구성된 배열을 선언합니다. 
    const [names, setNames] = useState([
        {id: 1, text: '눈사람'},
        {id: 2, text: '얼음'},
        {id: 3, text: '눈'},
        {id: 4, text: '바람'},
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState('5');
    
    const onChange = e => setInputText(e.target.value);
    // 버튼을 클릭했을 때 호출할 onClick 함수를 선언하여 버튼의 onClick 이벤트로 설정합니다. 
    const onClick = () => {
        const nextNames = names.concat({
            id: nextId, // nextId 값을 id로 설정하고
            text: inputText
        });
        setNextId(nextId + 1); // nextId 값에 1을 더해 준다. 
        setNames(nextNames); // names 값을 업데이트 한다.
        setInputText(''); // inputText를 비운다. 
    };

    const nameList = names.map(name => <li key={name.id}> {name.text} 
    </li>);
    
    return(
        <>
        <input value ={inputText} onChange = {onChange} />
        <button onClick={onClick}>추가</button>
        <ul>{nameList}</ul>
        </>
    );
};

export default IterationSample;