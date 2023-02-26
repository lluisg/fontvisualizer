import DisplayOption from './Options/DisplayOptions'

const Banner = (props) => {
  return(
    <nav>
      <a> Choose Your Style </a>
      <a>VISUALIZE OPTION</a>
      <DisplayOption handleChangeDisplay={props.handleChangeDisplay} />
    </nav>
  )
}

export default Banner;