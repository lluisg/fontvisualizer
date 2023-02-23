import Form from 'react-bootstrap/Form';

const FontOption = (props) => {
  return(
    <div>
      <Form.Label className='label-option'>Font</Form.Label>
      <Form.Select className='input-option' onChange={(e)=>props.handleChange(props.display, 'Font', e.target.value)}>
        <option value="Arial">Arial</option>
        <option value="Arial Black">Arial Black</option>
        <option value="Nirvana">Nirvana</option>
        <option value="Times New Roman">Times New Roman</option>
      </Form.Select>
    </div>
  )
}

export default FontOption;