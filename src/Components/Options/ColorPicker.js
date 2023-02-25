import React, { useCallback, useRef, useState, useEffect } from "react";
import { HexColorPicker } from "react-colorful";

const ColorPicker = (props) => {
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

  return(
    <div className="picker">
      <div
        className="swatch"
        style={{ backgroundColor: props.color }}
        onClick={() => toggle(true)}
      />

      {isOpen && (
        <div className="popover" ref={popover}>
          <HexColorPicker className='input-color' color={props.color} onChange={(e) => props.handleChange(props.display, props.name, e)} />
        </div>
      )}
    </div>
  )
}

export default ColorPicker;