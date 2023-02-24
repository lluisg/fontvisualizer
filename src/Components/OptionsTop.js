import DisplayOption from './Options/DisplayOptions'
import TextOption from './Options/TextOptions'

const OptionsTop = (props) => {
  return(
    <div className='row-options'>
      <TextOption handleChangeText={props.handleChangeText} />
      <DisplayOption handleChangeDisplay={props.handleChangeDisplay} />
    </div>
  )
}

export default OptionsTop;