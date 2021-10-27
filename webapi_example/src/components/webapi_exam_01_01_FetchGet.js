// 웹에서는 클라이언트와 서버가 http 프로토콜을 통해 요청과 응답을
// 주고 받습니다. http에서 사용하는 방식은 여러 가지가 있지만,
// GET과 POST 방식을 가장 많이 사용합니다.
// GET 방식은 http://example.com?ace=1&base=2와 같이 url? 뒤에
// 파라미터명=값 형태로 필요한 데이터를 전달합니다.
// GET 방식은 주로 데이터 조회나 검색 등의 기능에 사용됩니다.
// 즉, GET 방식은 데이터를 조회해 가져와 사용하는 것입니다.

import React, { Component } from 'react';

class FetchGet extends Component {

    componentDidMount = async () => {
        // 자바스크립트 내장 함수인 fetch를 사용하면 쉽게
        // 비동기 통신을 구현할 수 있습니다.
        // 여기서, 비동기 통신이란, 쉽게 말해, 먼저 시작한 작업의
        // 완료 여부와 상관없이 다음 작업을 실행하는 것입니다.
        // fetch를 사용해서 get 방식으로 url을 호출해 데이터를 가져옵니다.
        // 앞서 가져온 데이터를 response라는 변수에 할당합니다.
        // 이때, fetch 함수에 변도의 http 메서드 설정이 없다면
        // get 방식으로 호출 합니다.
        const response = await fetch('http://date.jsontest.com/');
        // 앞서 response 변수는 json 형태이기 때문에 json() 함수로
        // 사용할 수 있도록 변환해 body라는 변수에 할당합니다.
        // 이때, fetch 함수의 비동기적 특징 때문에 데이터를 가져오기
        // 전에 에러가 발생할 수 있습니다. 이런 에러는 비동기 함수에
        // 동기적인 기능을 추가해 해결할 수 있습니다. 이때 사용하는 것이
        // async와 await 문법입니다. 비동기 함수를 실행하는 함수에
        // async를 추가하고, 동기적으로 처리돼야 하는 함수 구문 앞에
        // await을 추가해 줍니다.
        const body = await response.json();
        alert(body.date)
    }

    render() {
        return (
            <h1>fetch get</h1>
        );
    }
}

export default FetchGet;