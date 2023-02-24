import SizeOption from './Options/SizeOptions'
import FontOption from './Options/FontOptions'
import ColorOption from './Options/ColorOptions'
import ExtraOption from './Options/ExtraOptions'

const OptionsOther = (props) => {
  return(
    <div className='container-options'>
      <div className='row-options'>
        <FontOption display={props.display} handleChange={props.handleChange} />
        <SizeOption display={props.display} handleChange={props.handleChange} />
      </div>
      <div className='row-options'>
        <ColorOption display={props.display} pick='color' color={props.color} handleChange={props.handleChange} />
        <ColorOption display={props.display} pick='bgcolor' color={props.bgcolor} handleChange={props.handleChange} />
      </div>
      <div className='row-options'>
        <ExtraOption display={props.display} handleChange={props.handleChange} />
      </div>
    </div>
  )
}

export default OptionsOther;