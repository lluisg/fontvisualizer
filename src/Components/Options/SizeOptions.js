import Form from 'react-bootstrap/Form';

const SizeOption = (props) => {
  return(
    <div>
      <Form.Label className='label-option'>Size</Form.Label>
      <Form.Select className='input-option' onChange={(e)=>props.handleChange(props.display, 'Size', e.target.value)}>
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={20}>20</option>
        <option value={25}>25</option>
        <option value={30}>30</option>
        <option value={40}>40</option>
        <option value={50}>50</option>
        <option value={60}>60</option>
        <option value={10}>10</option>
      </Form.Select>
    </div>
  )
}

export default SizeOption;