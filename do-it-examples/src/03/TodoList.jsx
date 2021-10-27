// 배열 컴포넌트의 경우 배열 요소의 개수만큼 반복하므로 성능에 영향을 많이 줍니다.
// 따라서 배열 컴포넌트에는 키값을 key로 꼭 정의해 주어야 합니다.
// 키값을 정의하여 출력한 배열 컴포넌트는 다시 출력해야 하는 경우 리액트 엔진이
// 기존의 컴포넌트를 재활용하여 성능을 높일 수 있기 때문입니다.
// 다음은 키값을 정의한 배열 컴포넌트의 활용입니다

import React from "react";

class TodoList extends React.PureComponent {
  // 컴포넌트의 render() 함수에서 바로 map()함수를 이용해
  // 배열을 출력하는 예제
  // taskName에 고유한 값이 들어 있으므로 이를 키값으로 사용하면
  // 이전 키값과 충돌하는 문제를 해결할 수 있습니다.
  render() {
    const todoList = [
      { taskName: "빨래하기", finished: false },
      { taskName: "공부하기", finished: true },
    ];
    return (
      <div>
        {todoList.map((todo) => (
          <div key={todo.taskName}>{todo.taskName}</div>
        ))}
      </div>
    );
  }
}

export default TodoList;
