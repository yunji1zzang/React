// Hooks는 리액트 v16.8에 새로 도입된 기능으로 함수형 컴포넌트에서도
// 상태 관리를 할 수 있는 useState, 렌더링 직후 작업을 설정하는
// useEffect 등의 기능을 제공하여 기존의 함수형 컴포넌트에서
// 할 수 없었던 다양한 작업을 할 수 있게 해줍니다.

// useState는 가장 기본적인 Hook이며, 함수형 컴포넌트에서도 가변적인
// 상태를 지닐 수 있게 해줍니다. 즉, 함수형 컴포넌트에서 상태를 관리해야
// 한다면 이 Hook을 사용하면 됩니다.

// useState 기능을 사용해서 숫자 카운터를 구현해 보겠습니다.
// import 구문으로 useState를 불러옵니다.
import React, {useState} from "react";

const Counter = () => {
    // useState 함수의 파라미터에는 상태의 기본값을 넣어 줍니다.
    // 여기서는 0을 넣어 주었으며, 이것은 카운터의 기본값을
    // 0으로 설정하겠다는 의미입니다.
    // 이 함수가 호출되면 배열을 반환하게 되며, 그 배열의 
    // 첫번째 원소는 상태 값, 두번째 원소는 상태를 설정하는 함수입니다.
    // 이 함수에 파라미터를 넣어서 호출하면 전달받은 파라미터로
    // 값이 바뀌고 컴포넌트가 정상적으로 리렌더링 됩니다.
    const [value, setValue] = useState(0);

    return (
        <div>
            <p>
                현재 카운터 값은 <b>{value}</b> 입니다.
            </p>
            <button onClick={() => setValue(value+1)}>+1</button>
            <button onClick={() => setValue(value-1)}>-1</button>
        </div>
    );
};

export default Counter;