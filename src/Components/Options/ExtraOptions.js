import Form from 'react-bootstrap/Form';
import ColorPicker from "./ColorPicker"

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const ExtraOption = (props) => {
  return(
    <div id='container-extra' className='container-option'>
      <div className='btn-extra'>
        <Form>
          <Form.Group as={Row}>
            <Form.Label className='label-option' column>Extra Options</Form.Label>
          </Form.Group>

          <Form.Group as={Row} style={{width:'100%;'}}>
            <Col md={12} xs={4}>
              <Form.Check
                    type='checkbox'
                    label='Underline'
                    onChange={()=>props.handleChange(props.display, 'underline', true)}
                    checked={props.underline}
              />
            </Col>
            <Col md={12} xs={4}>
              <Form.Check
                    type='checkbox'
                    label='Bold'
                    onChange={()=>props.handleChange(props.display, 'bold', true)}
                    checked={props.bold}
              />
            </Col>
            <Col md={12} xs={4}>
              <Form.Check
                    type='checkbox'
                    label='Cursive'
                    onChange={()=>props.handleChange(props.display, 'cursive', true)}
                    checked={props.cursive}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} style={{border:'2px solid green;'}}>
            <Col md={12} xs={4}>
              <Form.Check 
                  type='checkbox'
                  label='Uppercase'
                  onChange={()=>props.handleChange(props.display, 'uppercase', true)}
                  checked={props.uppercase}
              />
            </Col>
            <Col md={12} xs={4}>
              <Form.Check 
                  type='checkbox'
                  label='Centered'
                  onChange={()=>props.handleChange(props.display, 'centered', true)}
                  checked={props.centered}
              />
            </Col>
            <Col md={12} xs={4}>
              <div className='border-option'>
                <Form.Check 
                      type='checkbox'
                      label='Border'
                      onChange={()=>props.handleChange(props.display, 'border', true)}
                      checked={props.border}
                />
                <ColorPicker color={props.color} display={props.display} name={'bordercolor'} handleChange={props.handleChange} />
              </div>
            </Col>
          </Form.Group>
        </Form>
      </div>
    </div>
  )
}

export default ExtraOption;