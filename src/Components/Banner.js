import React, { useState } from 'react';
import DisplayOption from './Options/DisplayOptions'

const Banner = (props) => {
  const [hideOptions, setOptions] = useState(false);

  const handleClick = () => {
    setOptions(!hideOptions);
    props.handleHideOptions(!hideOptions)
  }

  return(
    <nav>
      <a> Choose Your Style </a>
      <button id="btn-visualizer" onClick={handleClick} className={hideOptions ? "vis_active" : "vis_inactive"}>Full Page</button>
      <DisplayOption handleChangeDisplay={props.handleChangeDisplay} />
    </nav>
  )
}

export default Banner;