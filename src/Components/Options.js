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
        <TextOption display={props.display} handleChangeCurrent={props.handleChangeCurrent} />
      </div>
      <div className='row-options'>
        <div className='row-suboptions'>
          <FontOption display={props.display} handleChange={props.handleChange} font={props.font} fonts={props.fonts}/>
          <ColorOption display={props.display} color={props.color} handleChange={props.handleChange} />
        </div>
        <div className='row-suboptions'>
          <SizeOption display={props.display} handleChange={props.handleChange} size={props.size} />
          <BackgroundOption display={props.display} color={props.bgcolor} handleChange={props.handleChangeBackground} />
        </div>
      </div>
      <div className='row-options'>
        <ExtraOption   display={props.display} handleChange={props.handleChange} 
                       color={props.bordercolor}
                       underline={props.underline}
                       bold={props.bold}
                       cursive={props.cursive}
                       uppercase={props.uppercase}
                       centered={props.centered}
                       border={props.border}
               
        />
      </div>
    </div>
  )
}

export default Options;