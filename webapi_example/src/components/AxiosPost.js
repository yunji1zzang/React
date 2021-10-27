// axios로 post 방식의 호출을 하는 문법은 get 방식으로 호출했을 때와
// 거의 동일합니다. 다른 점은 post 함수의 파라미터로 json과 같은 형태의
// 데이터를 넣고, http body에 담아 url을 호출할 수 있다는 것입니다.

import React, { Component } from 'react';
import axios from 'axios';

class AxiosPost extends Component {
    componentDidMount(){
        // axios.post('호출 url', json 데이터) 문법으로 post 방식의
        // http 호출을 합니다. json 데이터는 {key1:value1, key2:value2}
        // 형태로 사용하고 http body에 담겨 전송됩니다.
        // 그리고, 호출한 url에서는 body의 데이터를 사용하지 않기 때문에
        // 어떤 형식으로 사용하는지만 확인 합니다.
        axios.post('http://date.jsontest.com/', {
            a:"react", b:200
        })
        // url 호출이 완료되면, then 함수가 실행됩니다. 이때 호출 결과로
        // response가 반환됩니다. response와 호출된 변수명 사이에
        // data를 붙이면, 변수를 사용할 수 있습니다.
        .then(response => {alert(response.data.date)})
    }
    render() {
        return (
            <h1>axios post</h1>
        );
    }
}

export default AxiosPost;