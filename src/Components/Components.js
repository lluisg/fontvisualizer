import React, { useState, useEffect, useRef } from 'react';

import Options from "./Options"
import Displayer from "./Displayer"


class FontVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Sample text',

      font: 'Arial',
      size: '10',
      color: '#ffffff',
      bgcolor: '#000000',

      font2: 'Arial',
      size2: '10',
      color2: '#ffffff',
      bgcolor2: '#000000',
    }

    this.ChangeText = this.ChangeText.bind(this);
    this.ChangeDisplay = this.ChangeDisplay.bind(this);
    this.ChangeParameter = this.ChangeParameter.bind(this);
  }

  UpdateValues(){
    // console.log('updating values', this.state)

    let previewer = document.getElementById('previewer1');
    previewer.style.color = this.state.color;
    previewer.style.backgroundColor = this.state.bgcolor;

    let text = document.getElementById('previewer-text1');
    text.innerHTML = this.state.text;
    text.style.fontSize = this.state.size+'px';

    let previewer2 = document.getElementById('previewer2');
    previewer2.style.color = this.state.color2;
    previewer2.style.backgroundColor = this.state.bgcolor2;

    let text2 = document.getElementById('previewer-text2');
    text2.innerHTML = this.state.text2;
    text2.style.fontSize = this.state.size2+'px';
  }

  ChangeText(value){
    console.log('change text:', value)
    this.setState({
      text: value
    });
  }

  ChangeDisplay(value){
    console.log('change display:', value)

    let options2 = document.getElementById('container-options2')
    let previewer2 = document.getElementById('previewer2')

    if(value == '1'){
      options2.classList.add('hide-options')
      previewer2.classList.add('hide-preview')
    }else{
      options2.classList.remove('hide-options')
      previewer2.classList.remove('hide-preview')
    }
  }

  ChangeParameter(display, name, value){
    console.log('change:', display, name, value)

    let [size, font, color, bgcolor] = [this.state.size, this.state.font, this.state.color, this.state.bgcolor];
    if(display=='2'){
      [size, font, color, bgcolor] = [this.state.size2, this.state.font2, this.state.color2, this.state.bgcolor2];
    }
    console.log(size, font, color, bgcolor)
    console.log(name=='color')

    if (name == 'Size'){ size = value }
    else if(name == 'Font'){ font = value}
    else if(name == 'Color'){ color = value}
    else if(name == 'Background'){ bgcolor = value}
    console.log(size, font, color, bgcolor)

    if(display==1){
      this.setState({
        size: size,
        font: font,
        color: color,
        bgcolor: bgcolor
      })
    }else{
      this.setState({
        size2: size,
        font2: font,
        color2: color,
        bgcolor2: bgcolor
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
        <Options
            handleChangeText={this.ChangeText}
            handleChangeDisplay={this.ChangeDisplay}
            handleChange={this.ChangeParameter}
            font={this.state.font} 
            size={this.state.size} 
            color={this.state.color} 
            bg={this.state.bgcolor} 
            font2={this.state.font2} 
            size2={this.state.size2} 
            color2={this.state.color2} 
            bg2={this.state.bgcolor2} 
        />
        why it doesnt appear the color in the background text <br/>
        add exta options with points: underline, line on the border, .... <br/>
        porque la segunda preview no aparece correctamente al empezar<br/>
        si estan las dos previews mirar la sombra quede bien<br/>
        <Displayer 
              text={this.state.text} 
        />
      </main>
    );
  }
};

export default FontVisualizer;