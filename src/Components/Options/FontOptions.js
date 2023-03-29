import Form from 'react-bootstrap/Form';
// const fonts = ['Abril Fatface', 'Alfa Slab One', 'Arial Black', 'Arial', 'Bebas Neue', 'Brush Script MT', 'Cabin', 'Caveat', 'Climate Crisis', 'Comfortaa', 'Comic Sans MS', 'Courier New', 'Dancing Script', 'Dosis', 'Fira Sans', 'Garamond', 'Georgia', 'IBM Plex Mono', 'Impact', 'Inconsolata', 'Indie Flower', 'Josefin Sans', 'Karla', 'Lato', 'Lobster', 'Lora', 'Lucida Console', 'Lucida Sans Unicode', 'Merriweather', 'Montserrat', 'Muli', 'Noto Sans', 'Open Sans', 'Oswald', 'Pacifico', 'Palatino Linotype', 'Playfair Display', 'Poppins', 'PT Sans', 'PT Serif', 'Quicksand', 'Raleway', 'Roboto', 'Shadows Into Light', 'Sofia', 'Source Code Pro', 'Source Sans Pro', 'Space Mono', 'Tahoma', 'Times New Roman', 'Titillium Web', 'Trebuchet MS', 'Ubuntu', 'Verdana', 'Work Sans']

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