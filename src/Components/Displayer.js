import React, { useState, useEffect, useRef } from 'react';

const Displayer = (props) => {
  let editable
  props.display == 'top' ? editable = true : editable = false

  return (
    <div className="container-previewer">
      <div id={"previewer-"+props.display} className='previewer'>
        <div  id={"previewer-title-"+props.display} 
              className='previewer-title' 
              contentEditable={editable} 
              suppressContentEditableWarning={true}>
                {props.title}
        </div>
        <div  id={"previewer-text-"+props.display} 
              className='previewer-text' 
              contentEditable={editable} 
              suppressContentEditableWarning={true}>
                {props.text}
        </div>
      </div>
    </div>
    );
};

export default Displayer;