import Form from 'react-bootstrap/Form';

const DisplayOption = (props) => {
  return(
    <div id='container-display' className='container-option'>
      <div className='btn-display'>
        <Form.Label className='label-option'>N. Displays</Form.Label>
        <Form.Select className='display-option' onChange={(e)=>props.handleChangeDisplay(e.target.value)}>
          <option value={1}>1</option>
          <option value={2}>2</option>
        </Form.Select>
      </div>
    </div>
  )
}

export default DisplayOption;