// 자바스크립트는 비동기적으로 동작합니다. 그래서 먼저 실행된 작업이
// 끝나지 않았더라도 다음 작업이 시작될 수 있습니다. 콜백 함수를 이용하면
// 특정 코드에 순서를 정해서, 원하는 시점에 실행할 수 있습니다.

import React, { Component } from 'react';

class CallbackFunc extends Component {
    componentDidMount(){
        // logPrint라는 함수를 호출하는데 파라미터로 1과 함수를 전달합니다.
        this.logPrint(1, function(return1){
            console.log("return1 : " + return1);
            // 호출된 logPrint 함수는 전달 받은 파라미터 param에
            // 자기자신 1을 더해 2를 할당합니다. 2가 된 param 변수를
            // callback 함수에 다시 파라미터로 넣고 함수를 실행합니다.
            this.logPrint(return1, function(return2){
                console.log("return2 : " + return2);
            })
        }.bind(this))
    }

    
    logPrint(param, callback){
        console.log("logPrint param : " + param);
        param += param
        // callback(param); 에서 실행된 callback 함수는
        // 앞서, 본소스의 10행의 function(return1){ 에서부터
        // 18행의 }.bind(this))까지 입니다.
        // 15행에서 this.logPrint(return1, function(return2){ 로
        // 다시 한번 logPrint 함수를 실행하는데
        // 앞서 10행의 function(return1){ 첫 번째 함수 실행에서 반환된
        // return1 값(2)을 파라미터로 전달합니다.
        callback(param);
        // 10행의 this와 15행의 this는 다릅니다. 그래서, this로
        // logPrint 함수에 접근해 사용하려고 하면 에러가 발생합니다.
        // 함수 밖의 this를 함수 안에서도 동일하게 사용하기 위해서
        // .bind(this)를 함수에 붙여줍니다.
    }

   render() {
        return (
            <h1>Callback Function</h1>
        );
    };
};

export default CallbackFunc;