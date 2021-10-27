// Fade 패키지는 특정 영역을 서서히 나타내고 숨기는 기능을 제공합니다.
// 기능을 버튼 이벤트로 제어할 수 있습니다. 

import React, { Component } from 'react';
import {Button, Fade} from 'reactstrap';

class ReactstrapFade extends Component {
    constructor(props){
        super(props);
        // <Fade> 태그 영역의 표시 상태를 state로 선언하고
        // 초기값은 표시인 true로 할당합니다.
        this.state = {fadeInOut: true}
    }

    toggle = (e) => {
        this.setState({fadeInOut: !this.state.fadeInOut})
    }

    render() {
        return (
            <div>
                <Button color="success"
                        onClick={this.toggle}>
                            Fade In/Out
                        </Button>
                        {/* <Fade>태그는 in 속성이 true이면 표시, false 이면 미표시 됩니다. 
                            fadeInOut의 초기값이 true이기 때문에 최초 화면 로딩 시 <fade> 태그 영역이 표시됩니다. */}
                <Fade in = {this.state.fadeInOut} tag="h1">
                    호푸야 항상 건강하렴 사랑해 *^^*
                </Fade>

            </div>
        )};
};

export default ReactstrapFade;