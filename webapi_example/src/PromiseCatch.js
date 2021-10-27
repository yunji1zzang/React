// Promise의 상태가 대기, 이행, 거부 중 거부 상태가 됐을 때
// catch 함수를 실행합니다. 대기 상태의 Promise에 에러가 발생해
// 이행으로 상태 변화를 하지 못하는 경우 입니다.

import React, { Component } from 'react';

class PromiseCatch extends Component {
    componentDidMount(){
        // Promise라는 객체를 생성해 promise를 사용합니다.
        // 파라미터로 2개의 함수를 받으면, 첫번째 함수(resolve)는 이행함수,
        // 두번째 함수(reject)는 거부 함수로 사용됩니다. 
        new Promise((resolve, reject) => {
            // 거부 함수 reject를 실행하면서 Error 객체를 사용해 
            // 에러를 발생 시킵니다. 
            reject(Error("ERROR Info"));
        })
        // Promise 동작 중 거부 함수가 실행되면, 이행 상태가 되지 못하기 때문에
        // then 함수는 실행되지 않습니다. 
        .then(result => console.log("then " + result))
        // promise의 상태가 거부로 변하면서 catch 함수가 실행됩니다. 
        // 즉, 본 소스의 15행의 reject 함수에서 파라미터로 전달받은 
        // 에러 정보를 출력합니다. 
        .catch(result => console.log("catch : " + result));
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default PromiseCatch;