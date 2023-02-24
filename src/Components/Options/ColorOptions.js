import React, { useCallback, useRef, useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import { HexColorPicker } from "react-colorful";

const ColorOption = (props) => {
  const popover = useRef();
  const [isOpen, toggle] = useState(false);

  const handler = useCallback(() => toggle(false), []);

  useEffect(() => {
    let startedInside = false;
    let startedWhenMounted = false;

    const listener = (event) => {
      // Do nothing if `mousedown` or `touchstart` started inside ref element
      if (startedInside || !startedWhenMounted) return;
      // Do nothing if clicking ref's element or descendent elements
      if (!popover.current || popover.current.contains(event.target)) return;

      handler(event);
    };

    const validateEventStart = (event) => {
      startedWhenMounted = popover.current;
      startedInside = popover.current && popover.current.contains(event.target);
    };

    document.addEventListener("mousedown", validateEventStart);
    document.addEventListener("touchstart", validateEventStart);
    document.addEventListener("click", listener);

    return () => {
      document.removeEventListener("mousedown", validateEventStart);
      document.removeEventListener("touchstart", validateEventStart);
      document.removeEventListener("click", listener);
    };
  }, [popover, handler]);

  let name
  props.pick == 'color' ? name = 'Color' : name = 'Background'

  return(
    <div className='container-option container-color container-btn'>
      <Form.Label className='label-option'> {name}: <br/>{props.color} </Form.Label>
      <div className="picker">
        <div
          className="swatch"
          style={{ backgroundColor: props.color }}
          onClick={() => toggle(true)}
        />

        {isOpen && (
          <div className="popover" ref={popover}>
            <HexColorPicker className='input-option input-color' color={props.color} onChange={(e) => props.handleChange(props.display, name, e)} />
          </div>
        )}
      </div>
    </div>
  )
}

export default ColorOption;