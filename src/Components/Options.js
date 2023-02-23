import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import DisplayOption from './Options/DisplayOptions'
import SizeOption from './Options/SizeOptions'
import FontOption from './Options/FontOptions'
import ColorOption from './Options/ColorOptions'

const OptionsTop = (props) => {
  return(
    <Form id='top-form' className="form">
      <Row>
        <Col></Col>
        <Col>
          <Form.Label className='label-text my-1'>Text</Form.Label>
        </Col>
        <Col xs={6}>
          <Form.Control className='input-text' type="text" placeholder="Sample text" onChange={(e)=>props.handleChangeText(e.target.value)} />
        </Col>
        <Col>
          <Form.Label className='label-text'>N. Displays</Form.Label>
        </Col>
        <Col>
          <DisplayOption handleChangeDisplay={props.handleChangeDisplay} />
        </Col>
        <Col></Col>
      </Row>
    </Form>
  )
}

const OptionsOther = (props) => {
  return(
    <Form id={props.id} className="form">
      <Row>
        <Col>
          <FontOption display={props.display} handleChange={props.handleChange} />
        </Col>
        <Col>
          <SizeOption display={props.display} handleChange={props.handleChange} />
        </Col>
        <Col>
          <ColorOption display={props.display} pick='color' color={props.color} handleChange={props.handleChange} />
        </Col>
        <Col>
          <ColorOption display={props.display} pick='bgcolor' color={props.bgcolor} handleChange={props.handleChange} />
        </Col>
      </Row>
    </Form>  
  )
}

const Options = (props) => {

  return (
    <div className="container-options">
      <div id='container-topoptions'>
        <OptionsTop handleChangeText={props.handleChangeText} handleChangeDisplay={props.handleChangeDisplay} />
      </div>
      <div id='container-options1'>
        <OptionsOther id='form-options1'
                      display='1'
                      handleChange={props.handleChange} 
                      color={props.color}
                      bgcolor={props.bgcolor}
        />
      </div>
      <div id='container-options2' className='hide-options'>
        <OptionsOther id='form-options2'
                      display='2'
                      handleChange={props.handleChange} 
                      color={props.color2}
                      bgcolor={props.bgcolor2}
        />
      </div>
    </div>
  );
};

export default Options;