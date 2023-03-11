import React, { useState, useEffect, useRef, useCallback } from 'react';
import ContentEditable from 'react-contenteditable';

const Displayer = (props) => {
  let editable
  props.display == 'top' ? editable = true : editable = false

  return (
    <div className="container-previewer">
      <div id={"previewer-"+props.display} className='previewer' data-num-display={props.num_displays}>
        <div id={"previewer2-"+props.display}>
          <ContentEditable  id={"previewer-title-"+props.display} 
                            className='previewer-title' 
                            onBlur={(e) => props.handleChangeText('title', e.target.innerHTML)} 
                            html={props.title} />
        </div>

        <ContentEditable  id={"previewer-text-"+props.display} 
                          className='previewer-text' 
                          onBlur={(e) => props.handleChangeText('text', e.target.innerHTML)} 
                          html={props.text} />
      </div>
    </div>
    );
};

export default Displayer;