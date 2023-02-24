import Form from 'react-bootstrap/Form';

const TextOption = (props) => {
  return(
    <div className='container-option container-text container-btn'>
      <Form.Label className='label-option'>Text</Form.Label>
      <Form.Control className='input-text' type="text" placeholder="Sample text" onChange={(e)=>props.handleChangeText(e.target.value)} />
    </div>
  )
}

export default TextOption;