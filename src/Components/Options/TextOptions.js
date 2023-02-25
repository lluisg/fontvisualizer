import Form from 'react-bootstrap/Form';

const TextOption = (props) => {
  return(
    <div id='container-text' className='container-option'>
      <div className='btn-text'>
        <Form.Label className='label-option'>Text</Form.Label>
        <Form.Control className='input-text' type="text" placeholder="Sample text" onChange={(e)=>props.handleChangeText(e.target.value)} maxLength={83} />
      </div>
    </div>
  )
}

export default TextOption;