import Form from 'react-bootstrap/Form';

const DisplayOption = (props) => {
  return(
    <div className='container-option container-display container-btn'>
      <Form.Label className='label-option'>N. Displays</Form.Label>
      <Form.Select className='display-option' onChange={(e)=>props.handleChangeDisplay(e.target.value)}>
        <option value={1}>1</option>
        <option value={2}>2</option>
      </Form.Select>
    </div>
  )
}

export default DisplayOption;