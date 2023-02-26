import React, { useState, useEffect, useRef } from 'react';

import Banner from "./Banner"
import Options from "./Options"
import Displayer from "./Displayer"

class FontVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'This content is editable',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor suscipit porta. Nulla consectetur vulputate justo, ac accumsan elit placerat vel. Nulla varius vel arcu sit amet suscipit. In nisl ex, posuere vel interdum sed, maximus a est. Vivamus malesuada semper leo, sed hendrerit turpis dignissim sit amet. Cras odio lacus, vehicula et nisl et, efficitur luctus nisl. Vivamus rhoncus congue odio, quis aliquet metus cursus eget. Vivamus a arcu sed mi euismod accumsan in quis lacus. Proin egestas tempus elit, id aliquet ante imperdiet at. Donec pellentesque vestibulum fermentum. Fusce vestibulum tempor orci et dapibus.',
      
      current_top: 'title',
      current_bottom: 'title',
      background_top: '#c1fffb', 
      background_bottom: '#0600a8', 

      top_title: {
        font: 'Arial',
        size: '40',
        color: '#00043e',
        underline: false,  
        bold: false,
        cursive: false,
        uppercase: false,
        border: false,
        bordercolor: '#160040',
      },
      top_text: {
        font: 'Arial',
        size: '12',
        color: '#000000',
        underline: false,  
        bold: false,
        cursive: false,
        uppercase: false,
        border: false,
        bordercolor: '#ffffff',
      },

      bottom_title: {
        font: 'Arial',
        size: '40',
        color: '#ffc62a',
        underline: false,  
        bold: false,
        cursive: false,
        uppercase: false,
        border: false,
        bordercolor: '#160040',
      },
      bottom_text: {
        font: 'Arial',
        size: '12',
        color: '#ffffff',
        underline: false,  
        bold: false,
        cursive: false,
        uppercase: false,
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
    ['top', 'bottom'].map(position =>{
      ['title', 'text'].map(line => {
        let disp_val = position+'_'+line

        // changes on the previewer element
        let previewer = document.getElementById('previewer-'+position);
        previewer.style.color = this.state[disp_val].color
        previewer.style.backgroundColor = this.state[disp_val].bgcolor;
    
        // changes on the text itself
        let text = document.getElementById('previewer-'+line+'-'+position);
        
        this.state[disp_val].uppercase
          ? text.innerHTML = this.state[line].toUpperCase()
          : text.innerHTML = this.state[line]
    
        text.style.fontFamily = '"'+this.state[disp_val].font+'", sans-serif, serif';
        text.style.fontSize = this.state[disp_val].size + 'px';
    
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
    })
  }

  ChangeText(which, value){
    console.log('change', which, ':', value)
    if (which == 'title'){
      this.setState({ title: value })
    }else{
      this.setState({ text: value })
    }
  }

  ChangeDisplay(value){
    console.log('change display:', value)

    let el = document.getElementById('container-bottom')
    if(value == '1'){
      el.classList.add('hide-display')
    }else{
      el.classList.remove('hide-display')
    }
  }

  ChangeParameter(display, name, value){
    console.log('change in', this.state['current_'+display], ':' , name, value)

    let curr = this.state['current_'+display]
    let name_dsp = display+'_'+curr
    let dsp_state = this.state[name_dsp]

    let variables = Object.keys(dsp_state)
    variables.map((var_name, index) => {
      if(name == var_name){
        if (typeof dsp_state[var_name] == 'boolean'){
          dsp_state[var_name] = !dsp_state[var_name]
        }else{
          dsp_state[var_name] = value
        }
      }
    });

    if(name_dsp == 'top_title'){
      this.setState({ top_title: dsp_state})
    }else if(name_dsp == 'top_text'){
      this.setState({ top_text: dsp_state})
    }else if(name_dsp == 'bottom_title'){
      this.setState({ bottom_title: dsp_state})
    }else if(name_dsp == 'bottom_text'){
      this.setState({ bottom_text: dsp_state})
    }
  }

  componentDidMount(){
    this.UpdateValues()
  }

  componentDidUpdate(){
    this.UpdateValues()
  }

  render() {
    let dsp_top = 'top_'+this.state.current_top
    let dsp_bottom = 'bottom_'+this.state.current_bottom
    return (
      <main>
        <Banner />
        <div id='container-top'>
          <Options id='form-options-top'
                display='top'
                handleChange={this.ChangeParameter} 
                color={this.state[dsp_top].color}
                bgcolor={this.state[dsp_top].bgcolor}
                bordercolor={this.state[dsp_top].bordercolor} />
          <Displayer title={this.state.title} text={this.state.text} display='top' handleChangeText={this.ChangeText} />
        </div>
        <div id='container-bottom' className='hide-display'>
          <Options id='form-options_bottom'
                        display='bottom'
                        handleChange={this.ChangeParameter} 
                        color={this.state[dsp_bottom].color}
                        bgcolor={this.state[dsp_bottom].bgcolor}
                        bordercolor={this.state[dsp_bottom].bordercolor} />
          <Displayer display='bottom' handleChangeText={this.ChangeText} />
        </div>
      </main>
    );
  }
};

export default FontVisualizer;