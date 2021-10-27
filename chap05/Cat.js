
// 루트에 DOM을 렌더링해줄 Cat이라는 새 컴포넌트 작성
function Cat({name}){
    return <h1>고양이 이름은 {name} 입니다.</h1>;
}

ReactDOM.render(<Cat name="나비" />, document.getElementById("react-container"));