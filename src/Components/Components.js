import React, { useState, useEffect, useRef } from 'react';

import OptionsOther from "./OptionsOther"
import OptionsTop from "./OptionsTop"
import Displayer from "./Displayer"

import Fonts from "./data/fonts"

class FontVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Sample text',
      display1: {
        font: 'Arial',
        size: '40',
        color: '#00043e',
        bgcolor: '#c1fffb',
        underline: false,  
        bold: false,
        cursive: false,
        uppercase: false,
        border: false,
        bordercolor: '#160040',
      },
      display2: {
        font: 'Arial',
        size: '40',
        color: '#ffc62a',
        bgcolor: '#0600a8',
        underline: false,  
        bold: false,
        cursive: false,
        border: false,
        bordercolor: '#160040',
      },
    }

    this.ChangeText = this.ChangeText.bind(this);
    this.ChangeDisplay = this.ChangeDisplay.bind(this);
    this.ChangeParameter = this.ChangeParameter.bind(this);
  }

  UpdateValues(){
    // Updating the characteristics of the text and elements
    ['1', '2'].map(i =>{
      let disp_val = 'display'+i
      // changes on the previewer element
      let previewer = document.getElementById('previewer'+i);
      previewer.style.color = this.state[disp_val].color
      previewer.style.backgroundColor = this.state[disp_val].bgcolor;
  
      // changes on the text itself
      let text = document.getElementById('previewer-text'+i);
 
      this.state[disp_val].uppercase
        ? text.innerHTML = this.state.text.toUpperCase()
        : text.innerHTML = this.state.text
  
      // text.style.fontFamily = Fonts[this.state[disp_val].font]
      text.style.fontFamily = this.state[disp_val].font + ' sans-serif serif'
      text.style.fontSize = this.state[disp_val].size + 'px'
  
      this.state[disp_val].underline 
        ? text.style.textDecoration = 'underline'
        : text.style.textDecoration = 'none'

      this.state[disp_val].bold 
        ? text.style.fontWeight = 'bold'
        : text.style.fontWeight = '100'

      this.state[disp_val].cursive 
        ? text.style.fontStyle = 'italic'
        : text.style.fontStyle = 'normal'

      if('webkitTextStroke' in text.style){
        this.state[disp_val].border_black
          ? text.style.webkitTextStroke  = '2px black'
          : text.style.webkitTextStroke = 'transparent'

        if(this.state[disp_val].border){
          text.style.webkitTextStroke  = '2px '+this.state[disp_val].bordercolor
        }else{
          text.style.webkitTextStroke = 'transparent'
        }
      }else{
          alert ("Your browser doesn't support this case");
      }    

    })
  }

  ChangeText(value){
    console.log('change text:', value)
    this.setState({
      text: value,
    });
  }

  ChangeDisplay(value){
    console.log('change display:', value)

    let el = document.getElementById('container2')
    if(value == '1'){
      el.classList.add('hide-display')
    }else{
      el.classList.remove('hide-display')
    }
  }

  ChangeParameter(display, name, value){
    console.log('change:', name, '('+display+')', value)

    let display_state = this.state.display1
    if (display == '2'){
      display_state = this.state.display2
    }

    let variables = Object.keys(display_state)
    variables.map((var_name, index) => {
      if(name == var_name){
        if (typeof display_state[var_name] == 'boolean'){
          display_state[var_name] = !display_state[var_name]
        }else{
          display_state[var_name] = value
        }
      }
    });

    if(display=='1'){
      this.setState({ display1: display_state})
    }else{
      this.setState({ display2: display_state})
    }

  }

  componentDidMount(){
    this.UpdateValues()
  }

  componentDidUpdate(){
    this.UpdateValues()
  }

  render() {
    return (
      <main>
        <div id='container-top'>
          <OptionsTop handleChangeText={this.ChangeText} handleChangeDisplay={this.ChangeDisplay} />
        </div>
        <div id='container1'>
          <OptionsOther id='form-options1'
                        display='1'
                        handleChange={this.ChangeParameter} 
                        color={this.state.display1.color}
                        bgcolor={this.state.display1.bgcolor}
                        bordercolor={this.state.display1.bordercolor} />
          <Displayer text={this.state.text} display='1' />
        </div>
        <div id='container2' className='hide-display'>
          <OptionsOther id='form-options2'
                        display='2'
                        handleChange={this.ChangeParameter} 
                        color={this.state.display2.color}
                        bgcolor={this.state.display2.bgcolor}
                        bordercolor={this.state.display2.bordercolor} />
          <Displayer text={this.state.text} display='2' />
        </div>
      </main>
    );
  }
};

export default FontVisualizer;