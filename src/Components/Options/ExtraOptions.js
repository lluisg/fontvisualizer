import Form from 'react-bootstrap/Form';
import ColorPicker from "./ColorPicker"

const ExtraOption = (props) => {
  return(
    <div id='container-extra' className='container-option'>
      <div className='btn-extra'>
        <Form.Label className='label-option'>Extra Options</Form.Label>
        <Form.Check 
              type='checkbox'
              label='Underline'
              onChange={()=>props.handleChange(props.display, 'underline', true)}
        />
        <Form.Check 
              type='checkbox'
              label='Bold'
              onChange={()=>props.handleChange(props.display, 'bold', true)}
        />
        <Form.Check 
              type='checkbox'
              label='Cursive'
              onChange={()=>props.handleChange(props.display, 'cursive', true)}
        />
        <Form.Check 
              type='checkbox'
              label='Uppercase'
              onChange={()=>props.handleChange(props.display, 'uppercase', true)}
        />
        <div className='border-option'>
          <Form.Check 
                type='checkbox'
                label='Border'
                onChange={()=>props.handleChange(props.display, 'border', true)}
          />
          <ColorPicker color={props.color} display={props.display} name={'bordercolor'} handleChange={props.handleChange} />
        </div>
      </div>
    </div>
  )
}

export default ExtraOption;