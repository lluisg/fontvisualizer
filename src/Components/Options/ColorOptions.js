import Form from 'react-bootstrap/Form';
import { HexColorPicker } from "react-colorful";

const ColorOption = (props) => {
  let name;
  props.pick == 'color' ? name = 'Color' : name = 'Background'

  return(
    <div>
      <Form.Label className='label-option'> {name}: {props.color} </Form.Label>
      <HexColorPicker className='input-option input-color' color={props.color} onChange={(e) => props.handleChange(props.display, name, e)} />
    </div>
  )
}

export default ColorOption;