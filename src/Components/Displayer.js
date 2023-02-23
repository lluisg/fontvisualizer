const Displayer = (props) => {
  return (
    <div className="container-displayer">
      <div id="previewer1" className='previewer'>
        <a id="previewer-text1" className='previewer-text'>{props.text}</a>
      </div>
      <div id="previewer2" className='previewer hide-preview'>
        <a id="previewer-text2" className='previewer-text'>{props.text}</a>
      </div>
    </div>
    );
};

export default Displayer;