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
              checked={props.underline}
        />
        <Form.Check 
              type='checkbox'
              label='Bold'
              onChange={()=>props.handleChange(props.display, 'bold', true)}
              checked={props.bold}
        />
        <Form.Check 
              type='checkbox'
              label='Cursive'
              onChange={()=>props.handleChange(props.display, 'cursive', true)}
              checked={props.cursive}
        />
        <Form.Check 
              type='checkbox'
              label='Uppercase'
              onChange={()=>props.handleChange(props.display, 'uppercase', true)}
              checked={props.uppercase}
        />
        <Form.Check 
              type='checkbox'
              label='Centered'
              onChange={()=>props.handleChange(props.display, 'centered', true)}
              checked={props.centered}
        />
        <div className='border-option'>
          <Form.Check 
                type='checkbox'
                label='Border'
                onChange={()=>props.handleChange(props.display, 'border', true)}
                checked={props.border}
          />
          <ColorPicker color={props.color} display={props.display} name={'bordercolor'} handleChange={props.handleChange} />
        </div>
      </div>
    </div>
  )
}

export default ExtraOption;