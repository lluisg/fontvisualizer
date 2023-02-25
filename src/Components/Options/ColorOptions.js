import Form from 'react-bootstrap/Form';
import ColorPicker from "./ColorPicker"

const ColorOption = (props) => {
  return(
    <div id='container-color' className='container-option'>
      <div className='btn-color'>
        <Form.Label className='label-option'>Color: <br/>{props.color} </Form.Label>
        <ColorPicker color={props.color} display={props.display} name={'color'} handleChange={props.handleChange} />
      </div>
    </div>
  )
}

export default ColorOption;