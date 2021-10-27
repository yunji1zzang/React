// GET이 데이터를 조회해 가져와 사용하는 용도로 사용되다면,
// POST는 서버의 상태나 데이터를 변경하는 드으이 수행 작업에 사용됩니다.
// POST 방식은 http body에 데이터를 넣어 전달하는데, url 뒤에 파라미터를
// 표시하지 않고 사용할 수 있다는 장점이 있습니다.
// post 방식도 get 방식과 마찬가지로 자바스크립트 내장 함수인 fetch를
// 사용하면, 비동기 통신을 쉽게 구현할 수 있습니다.
import React, { Component } from 'react';

class FetchPost extends Component {

    componentDidMount = async () => {
        // fetch 사용 방법은 get 방식과 비슷하지만,
        // 두번째 파라미터에 post 호출에 대한 정보가 추가 됩니다.
        const response = await fetch('http://date.jsontest.com/', {
             method: 'POST', // POST 방식으로 통신을 한다는 의미입니다.
        // http 통신을 할 때 header 부분에서 어떤 형태의 데이터를
        // 사용할지 지정합니다. 이때 Content-Type이라는 변수를 사용합니다.
        // json 형태의 데이터를 사용하기 위해 application/json을 할당합니다.        
        headers: {
            'Content-Type': 'application/json',
        },
        // http body에 json 형태의 데이터를 담아서 전송합니다.
        body: {a:"react", b:200},
        });

        const body = await response.json();
        alert(body.date)
    }

    render() {
        return (
            <h1>fetch poset</h1>
        );
    }
}

export default FetchPost;