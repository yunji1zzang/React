// Form 패키지를 이용하면 기존 <html form> 태그에 깔끔하게 정리된
// 스타일을 간편하게 적용할 수 있습니다. 

import React, { Component } from 'react';
import { Form, Label, Input, Row, Col, FormGroup } from 'reactstrap';

class ReactstrapForm extends Component {
  render() {
    return (
      // Form 태그를 이용해 하나의 폼 단위로 사용할 영역을 묶어줍니다. 
      <Form>
        {/* Label 태그로 폼 요소를 설명하는 문자열을 추가할 수 있습니다.  */}
        <Label for="exampleGender">gender</Label>
        {/* input 유형을 select로 입력해 */}
        <Input type="select" bsSize="sm">
          <option>no select</option>
          <option>woman</option>
          <option>man</option>
        </Input>
        {/* Row 태그는 줄 단위로 태그들을 묶어 사용 할 수 있게 해줍니다. */}
        <Row form>
          {/* Col 태그는 Row 태그로 묶인 영역들이 가각 어느 정도의 영역을 차지할지 정해 줍니다. 
              그리고, Col 태그의 md 속성으로 너비 값을 정할 수 있는데, 한 줄에 12개의 영역으로 나뉩니다.
              한 Row 태그에 속한 Col 태그의 md 속성의 합이 12가 되도록 해야 합니다. */}
          <Col md={6}>
            {/* FormGroup 태그는 비슷한 용도의 태그들을 div 태그로 감싸 사용 할 수 있습니다. */}
            <FormGroup>
              <Label for="exampleAddress">address</Label>
              <Input type="text" name="address" id="address"/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleMobile">mobile</Label>
              <Input type="text" name="mobile" id="mobile"/>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleAge">age</Label>
              <Input type="text" name="age" id="age"/>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    )}
}

export default ReactstrapForm;