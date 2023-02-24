const Displayer = (props) => {
  return (
    <div className="container-previewer">
      <div id={"previewer"+props.display} className='previewer'>
        <a id={"previewer-text"+props.display} className='previewer-text'>{props.text}</a>
      </div>
    </div>
    );
};

export default Displayer;