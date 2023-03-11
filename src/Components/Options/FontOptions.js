import Form from 'react-bootstrap/Form';
import fonts from '../data/fonts'

const FontOption = (props) => {
  let fontsC = []
  fonts.map(font => {
    const font_clean = font.replace(/\s/g, '');
    fontsC.push(font_clean)
  })
  
  return(
    <div id='container-font' className='container-option'>
      <div className='btn-font'>
        <Form.Label className='label-option'>Font</Form.Label>
        <Form.Select onChange={(e)=>props.handleChange(props.display, 'font', e.target.value)} value={props.font}>
          {
            fonts.map((font, index) => {
              let font_clean = fontsC[index]
              return (<option key={font_clean} id={font_clean} value={font}>{font}</option>)
            })
          }
        </Form.Select>
      </div>
    </div>
  )
}

export default FontOption;