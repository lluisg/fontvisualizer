import Form from 'react-bootstrap/Form';

const FontOption = (props) => {
  let fontsC = []
  props.fonts.map(font => {
    const font_clean = font.replace(/\s/g, '');
    fontsC.push(font_clean)
  })
  
  return(
    <div id='container-font' className='container-option'>
      <div className='btn-font'>
        <Form.Label className='label-option'>Font</Form.Label>
        <Form.Select onChange={(e)=>props.handleChange(props.display, 'font', e.target.value)} value={props.font}>
          {
            props.fonts.map((font, index) => {
              let fontclean = fontsC[index].toLowerCase()
              return (<option key={fontclean} id={fontclean} value={font} className={fontclean}>{font}</option>)
            })
          }
        </Form.Select>
      </div>
    </div>
  )
}

export default FontOption;