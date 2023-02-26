import Form from 'react-bootstrap/Form';

const TextOption = (props) => {

  function checkOne(which, e){
    
    props.handleChange(props.display, 'current_'+props.display, which)

    var checkboxs = document.getElementsByName("checbox_unique_top");
    Array.prototype.forEach.call(checkboxs, function(el){
      el.checked = false;
    });
    e.checked = true
  }

  return(
    <div id='container-text' className='container-option'>
      <div className='btn-text'>
        <Form.Label className='label-option'>Modify</Form.Label>
        <div className='checkbox-row'>
          <Form.Check 
                type='checkbox'
                label='Title'
                name='checbox_unique_top'
                onChange={(e)=>checkOne('title', e.target)}
          />
          <Form.Check 
                type='checkbox'
                label='Text'
                name='checbox_unique_top'
                onChange={(e)=>checkOne('text', e.target)}
          />
        </div>
      </div>
    </div>
  )
}

export default TextOption;