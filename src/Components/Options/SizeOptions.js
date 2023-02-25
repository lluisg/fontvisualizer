import Form from 'react-bootstrap/Form';

const SizeOption = (props) => {
  return(
    <div id='container-size' className='container-option'>
      <div className='btn-size'>
        <Form.Label className='label-option'>Size</Form.Label>
        <Form.Select onChange={(e)=>props.handleChange(props.display, 'size', e.target.value)}>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
          <option value={40}>40</option>
          <option value={50}>50</option>
          <option value={60}>60</option>
          <option value={70}>70</option>
          <option value={80}>80</option>
          <option value={90}>90</option>
        </Form.Select>
      </div>
    </div>
  )
}

export default SizeOption;