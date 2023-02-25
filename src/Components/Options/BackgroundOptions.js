import Form from 'react-bootstrap/Form';
import ColorPicker from "./ColorPicker"

const BackgroundOption = (props) => {
  return(
    <div id='container-color' className='container-option'>
      <div className='btn-color'>
        <Form.Label className='label-option'>Bg Color: <br/>{props.color}</Form.Label>
        <ColorPicker color={props.color} display={props.display} name={'bgcolor'} handleChange={props.handleChange} />
      </div>
    </div>
  )
}

export default BackgroundOption;