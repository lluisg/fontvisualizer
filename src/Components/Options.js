import TextOption from './Options/TextOptions'
import SizeOption from './Options/SizeOptions'
import FontOption from './Options/FontOptions'
import ColorOption from './Options/ColorOptions'
import BackgroundOption from './Options/BackgroundOptions'
import ExtraOption from './Options/ExtraOptions'

const Options = (props) => {
  return(
    <div className='container-options'>
      <div className='row-options'>
        <TextOption display={props.display} handleChange={props.handleChange} />
      </div>
      <div className='row-options'>
        <FontOption display={props.display} handleChange={props.handleChange} />
        <SizeOption display={props.display} handleChange={props.handleChange} />
      </div>
      <div className='row-options'>
        <ColorOption display={props.display} color={props.color} handleChange={props.handleChange} />
        <BackgroundOption display={props.display} color={props.bgcolor} handleChange={props.handleChange} />
      </div>
      <div className='row-options'>
        <ExtraOption display={props.display} color={props.bordercolor} handleChange={props.handleChange} />
      </div>
    </div>
  )
}

export default Options;