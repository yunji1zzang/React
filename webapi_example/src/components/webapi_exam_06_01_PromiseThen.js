// promise는 콜백 함수와 같이 비동기적으로 동작하는 코드를 동기적으로
// 구현할 때 사용합니다. 이 promise를 사용하면 콜백 함수와 달리,
// 코드 가독성을 높일 수 있고, 예외 처리도 쉽게 할 수 있습니다.
// 즉, promise는 콜백 함수의 단점을 보완해 줍니다.
// promise는 대기, 이행, 거부의 개념이 있습니다. 대기 상태에서
// 이행 상태로 변할 때 then() 함수안의 코드가 실행 됩니다.
// promise then 함수를 사용하면 코드를 콜백 함수의 계단식 복잡한 코드
// 형태보다 가독성 있게 구현할 수 있습니다.
import React, { Component } from 'react';

class PromiseExam extends Component {
    componentDidMount(){
        // Promise라는 객체를 생성해 promise를 사용합니다.
        // 파라미터로 하나의 함수(resolve)만 받을 경우,
        // 이행 함수로 사용됩니다.
        new Promise(resolve => {
         // timeout 함수를 실행해서 5초 후에 resolve() 함수가 실행됩니다.
         // 이때 promise는 이행 상태가 되고, 다음의 then 함수가 실행됩니다.
            setTimeout(function(){
                // resolve 함수에서 파라미터로 전달된 결과값(react)을
                // result라는 파라미터로 받아 사용합니다.
                resolve('react');
            }, 5000); // 5초 후 시작!
        })
        .then(function(result){
            console.log(result); // react
            
            // result 변수에 200을 붙여 반환합니다.
            return result + 200;
        })
        // 앞서 result 변수에 200을 붙여 반환되는 순간
        // 대기하고 있던 다음의 then 함수가 실행됩니다.
        .then(result => {
            console.log(result); // react200
        })
    }

    render() {
        return (
            <h1>Promise</h1>
        );
    }
}

export default PromiseExam;