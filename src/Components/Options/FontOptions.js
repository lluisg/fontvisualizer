import Form from 'react-bootstrap/Form';

const FontOption = (props) => {
  let fonts = ['Arial', 'Verdana', 'Tahoma', 'Trebuchet MS', 'Times New Roman', 'Georgia', 'Garamond', 'Courier New', 'Brush Script MT']
  let fontsC = []
  fonts.map(font => {
    let font_clean = font.replaceAll(/\s/g,'')
    fontsC.push(font_clean)
  })
  
  return(
    <div id='container-font' className='container-option'>
      <div className='btn-font'>
        <Form.Label className='label-option'>Font</Form.Label>
        <Form.Select onChange={(e)=>props.handleChange(props.display, 'font', e.target.value)}>
          {
            fonts.map((font, index) => {
              let font_clean = fontsC[index]
              return (<option id={font_clean} value={font}>{font}</option>)
            })
          }
        </Form.Select>
      </div>
    </div>
  )
}

export default FontOption;