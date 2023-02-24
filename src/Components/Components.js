import React, { useState, useEffect, useRef } from 'react';

import Options from "./Options"
import OptionsOther from "./OptionsOther"
import OptionsTop from "./OptionsTop"
import Displayer from "./Displayer"


class FontVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Sample text',

      font: 'Arial',
      size: '10',
      color: '#00043e',
      bgcolor: '#c1fffb',
      underline: false,

      font2: 'Arial',
      size2: '10',
      color2: '#ffc62a',
      bgcolor2: '#0600a8',
      underline2: false,
    }

    this.ChangeText = this.ChangeText.bind(this);
    this.ChangeDisplay = this.ChangeDisplay.bind(this);
    this.ChangeParameter = this.ChangeParameter.bind(this);
  }

  UpdateValues(){
    let previewer = document.getElementById('previewer1');
    previewer.style.color = this.state.color;
    previewer.style.backgroundColor = this.state.bgcolor;

    let text = document.getElementById('previewer-text1');
    text.innerHTML = this.state.text;
    text.style.fontSize = this.state.size+'px';
    this.state.underline 
      ? text.style.textDecoration = 'underline'
      : text.style.textDecoration = 'none'

    let previewer2 = document.getElementById('previewer2');
    previewer2.style.color = this.state.color2;
    previewer2.style.backgroundColor = this.state.bgcolor2;

    let text2 = document.getElementById('previewer-text2');
    text2.innerHTML = this.state.text;
    text2.style.fontSize = this.state.size2+'px';
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

    let [size, font, color, bgcolor, underline] = [this.state.size, this.state.font, this.state.color, this.state.bgcolor, this.state.underline];
    if(display=='2'){
      [size, font, color, bgcolor, underline] = [this.state.size2, this.state.font2, this.state.color2, this.state.bgcolor2, this.state.underline];
    }

    if (name == 'Size'){ size = value }
    else if(name == 'Font'){ font = value}
    else if(name == 'Color'){ color = value}
    else if(name == 'Background'){ bgcolor = value}
    else if(name == 'underline') {underline = !underline}

    if(display==1){
      this.setState({
        size: size,
        font: font,
        color: color,
        bgcolor: bgcolor,
        underline: underline,
      })
    }else{
      this.setState({
        size2: size,
        font2: font,
        color2: color,
        bgcolor2: bgcolor,
        underline2: underline,
      })
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
                        color={this.state.color}
                        bgcolor={this.state.bgcolor} />
          <Displayer text={this.state.text} display='1' />
        </div>
        add exta options with points: underline, line on the border, .... <br/>
        consider adding at the state two dictionaries, one for each displayer <br/>
        <div id='container2' className='hide-display'>
          <OptionsOther id='form-options2'
                        display='2'
                        handleChange={this.ChangeParameter} 
                        color={this.state.color2}
                        bgcolor={this.state.bgcolor2} />
          <Displayer text={this.state.text} display='2' />
        </div>
      </main>
    );
  }
};

export default FontVisualizer;