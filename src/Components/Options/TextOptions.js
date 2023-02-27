import Form from 'react-bootstrap/Form';

const TextOption = (props) => {

  function checkOne(which, e){
    var checkboxs = document.getElementsByClassName("unique-"+props.display);
    Array.prototype.forEach.call(checkboxs, function(el){
      el.classList.remove('selected-unique')
    });
    e.classList.add('selected-unique')

    props.handleChangeCurrent(props.display, which)
  }

  return(
    <div id='container-text' className='container-option'>
      <div className='btn-text'>
        <Form.Label className='label-option'>Modify:</Form.Label>
        <div className={'checkbox-unique unique-'+props.display+' selected-unique'} onClick={(e)=>checkOne('title', e.target)}>Title</div>
        <div className={'checkbox-unique unique-'+props.display} onClick={(e)=>checkOne('text', e.target)}>Text</div>
      </div>
    </div>
  )
}

export default TextOption;