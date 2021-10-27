// Axios란? 비동기 통신 HTTP Client 라이브러리이며, 웹브라우저와
// Node.js를 위한 Promise API를 활용합니다. 즉, Front-End와
// Back-End 간 비동기 통신을 위해 Ajax와 더불어 사용합니다.
// 참고로, Ajax 보다 Axios를 사용하는 경우가 많습니다.

// Axios 특징
// 1) 운영환경에 따라 웹브라우저의 XMLHttpRequest 객체 또는
//     Node.js의 HTTP API 사용함.
// 2) ES6 형의 Promise API 사용을 지원함.
// 3) 요청과 응답 데이터의 변형, HTTP 요청 취소, HTTP 요청과 응답을
//    JSON 형태로 자동 변경도 가능함.

// axios도 fetch와 마찬가지로 비동기 통신을 지원하며, axios는 fetch와
// 달리, 다음과 같이 별도로 설치한 후 임포트해서 사용합니다.
// C:\reactstart\webapi_example>npm install -save axios

import React, { Component } from 'react';
import axios from 'axios';

class AxiosGet extends Component {
    componentDidMount(){
        // axios.get('호출 url') 문법으로 get 방식의 http 호출을 합니다.
        axios.get('http://date.jsontest.com')
        // url 호출이 완료되면, then 함수가 실행됩니다. 이때 호출 결과로
        // response가 반환됩니다. response와 호출된 변수명 사이에
        // data를 붙이면, 변수를 사용할 수 있습니다.
        .then(response => {alert(response.data.date)})
    }
    render() {
        return (
            <h1>axios get</h1>
        );
    }
}

export default AxiosGet;