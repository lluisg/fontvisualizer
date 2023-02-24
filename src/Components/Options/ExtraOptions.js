import Form from 'react-bootstrap/Form';

const ExtraOption = (props) => {
  return(
    <div className='container-option container-extra container-btn'>
      <Form.Label className='label-option'>Extra Options</Form.Label>
      <Form.Check 
            type='checkbox'
            label='Underline'
            onChange={()=>props.handleChange(props.display, 'underline', true)}
      />
    </div>
  )
}

export default ExtraOption;