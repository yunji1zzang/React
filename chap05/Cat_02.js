
// 루트에 DOM을 렌더링해줄 Cat이라는 새 컴포넌트 작성
// 리액트 프래그먼트(fragment : 조각이라는 뜻)를 사용해
// 두 형제 컴포넌트를 렌더링해 본다.
// 리액트는 둘 이상의 인접한 형제 엘리먼트를 컴포넌트로
// 렌더링하지 않기 때문에, 이들을 div와 같은 태그로 둘러싸야만 한다.
// 이로 인해 불필요한 태그가 만들어지고, 아무 목적도 없이
// 다른 태그를 감싸는 태그가 생겨버린다.
// 리액트 프래그먼트를 사용하면 새로운 태그를 실제로 만들지 않아도
// 이런 래퍼의 동작을 흉내낼 수 있다.
// 그렇게 인접한 h1 엘리먼트와 p 엘리먼트를 React.Fragment 엘리먼트로
// 둘러싸서 표현해 본다.
function Cat({name}){
    return (
        <React.Fragment>
            <h1>고양이 이름은 {name} 입니다.</h1>
            <p>이 고양이 멋져요.</p>
        </React.Fragment>
    ) ;
}

ReactDOM.render(<Cat name="나비" />, document.getElementById("react-container"));