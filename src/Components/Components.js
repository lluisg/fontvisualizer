import React, { useState, useEffect, useRef } from 'react';
import sanitizeHtml from "sanitize-html"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

import Banner from "./Banner"
import Options from "./Options"
import Displayer from "./Displayer"

import fonts from './data/fonts'


class FontVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'This content is editable',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor suscipit porta. Nulla consectetur vulputate justo, ac accumsan elit placerat vel. Nulla varius vel arcu sit amet suscipit. In nisl ex, posuere vel interdum sed, maximus a est. Vivamus malesuada semper leo, sed hendrerit turpis dignissim sit amet. Cras odio lacus, vehicula et nisl et, efficitur luctus nisl. Vivamus rhoncus congue odio, quis aliquet metus cursus eget. Vivamus a arcu sed mi euismod accumsan in quis lacus. Proin egestas tempus elit, id aliquet ante imperdiet at. Donec pellentesque vestibulum fermentum. Fusce vestibulum tempor orci et dapibus.',
      num_displays: '1',
      no_options: false,
      
      current_top: 'title',
      current_bottom: 'title',
      background_top: '#c1fffb', 
      background_bottom: '#0600a8', 

      top_title: {
        font: 'Verdana',
        size: '40',
        color: '#00043e',
        underline: false,  
        bold: false,
        cursive: false,
        uppercase: false,
        border: false,
        centered: false,
        bordercolor: '#160040',
      },
      top_text: {
        font: 'Tahoma',
        size: '12',
        color: '#000000',
        underline: false,  
        bold: false,
        cursive: false,
        uppercase: false,
        border: false,
        centered: false,
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
        centered: false,
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
        centered: false,
        bordercolor: '#160040',
      },
    }

    this.ChangeParameterText = this.ChangeParameterText.bind(this);
    this.CopyParameters = this.CopyParameters.bind(this);
    this.ChangeText = this.ChangeText.bind(this);
    this.ChangeDisplay = this.ChangeDisplay.bind(this);
    this.ChangeCurrentText = this.ChangeCurrentText.bind(this);
    this.ChangeBackgroundColor = this.ChangeBackgroundColor.bind(this);
    this.HideOptions = this.HideOptions.bind(this);
  }

  UpdateValues(){
    // Updating the characteristics of the text and elements
    console.log('updating');
    ['top', 'bottom'].map(position =>{
      ['title', 'text'].map(line => {
        let disp_val = position+'_'+line
        let back_val = 'background_'+position

        // changes on the previewer element
        let previewer = document.getElementById('previewer-'+position);
        previewer.style.backgroundColor = this.state[back_val];

        // changes on the text itself
        let text = document.getElementById('previewer-'+line+'-'+position);
        text.style.color = this.state[disp_val].color
        
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

          this.state[disp_val].centered 
          ? text.style.textAlign = 'center'
          : text.style.textAlign = 'left'
  
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

  Sanitize(text){
    const sanitizeConf = {
			allowedTags: ["b", "i", "a", "p"],
			allowedAttributes: { a: ["href"] }
		};
		return sanitizeHtml(text, sanitizeConf)
  }

  ChangeText(which, value){
    console.log('change', which, ':', value)
    if (which == 'title'){
      this.setState({ title: this.Sanitize(value) })
    }else{
      this.setState({ text: this.Sanitize(value) })
    }
  }

  ChangeCurrentText(which, value){
    console.log('change current', which, ':', value)
    if(which == 'top'){
      this.setState({ current_top: value })
    }else{
      this.setState({ current_bottom: value })
    }
  }

  ChangeBackgroundColor(which, name, value){
    console.log('change background color', which, ':', value)
    if(which == 'top'){
      this.setState({ background_top: value })
    }else{
      this.setState({ background_bottom: value })
    }

  }

  hideCopyOptions(value){
    let btncopy = document.getElementById('container-copy')
    if(value){
      btncopy.classList.add('hide-display')
    }else{
      btncopy.classList.remove('hide-display')
    }
  }

  ChangeDisplay(value){
    console.log('change display:', value)

    let display2 = document.getElementById('container-bottom')
    if(value == '1'){
      display2.classList.add('hide-display')
    }else{
      display2.classList.remove('hide-display')
    }

    this.hideCopyOptions(value=='1'||this.state.no_options ? true : false)

    this.setState({
      num_displays: value
    })
  }

  ChangeParameterText(display, name, value){
    console.log('change in', this.state['current_'+display], '('+display+') :' , name, value)

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

  CopyParameters(){
    this.setState((prevState)=>{
      return{
        ...prevState,
        background_bottom: prevState.background_top,
        bottom_title: prevState.top_title,
        bottom_text: prevState.top_text,
      }
    });

  }

  HideOptions(value){
    console.log('change hide options:', value)

    document.querySelectorAll('.container-options').forEach(function(options) {
      if(value){
        options.classList.add('hide-options')
      }else{
        options.classList.remove('hide-options')
      }  
    });

    document.querySelectorAll('.previewer').forEach(function(options) {
      if(value){
        options.classList.add('only-previewer')
      }else{
        options.classList.remove('only-previewer')
      }  
    });

    if(this.state.num_displays == '2'){
      this.hideCopyOptions(value)
    }else{
      this.hideCopyOptions(true)
    }

    this.setState({
      no_options: value
    });
  }

  UpdateFonts(){
    fonts.map((font, index) => {
      const font_clean = font.replace(/\s/g, '');
      let font_el = document.getElementById(font_clean)
      if(font_el){
        font_el.style.fontFamily = `"${font}", sans-serif, serif`
      }else{
        console.log('could not get font', font_clean)
      }
    })
  }

  componentDidMount(){
    // Add all the fonts you need
    const link = document.createElement('link');
    link.rel = 'stylesheet';

    const joinedList = fonts.join('|'); // join with '|'
    const replacedList = joinedList.replace(/\s+/g, '+'); // replace whitespace with '+'
    const href_value = 'https://fonts.googleapis.com/css?family=' + replacedList
    console.log('https://fonts.googleapis.com/css?family=' + replacedList)
    link.href = href_value;

    document.head.appendChild(link);

    link.onload = () => {
      // Change fonts
      this.UpdateFonts();
    };

    // Update values
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
        <Banner handleChangeDisplay={this.ChangeDisplay} handleHideOptions={this.HideOptions} />
        <div id='container-top'>
          <Options id='form-options-top'
                display='top'
                handleChange={this.ChangeParameterText} 
                handleChangeCurrent={this.ChangeCurrentText} 
                handleChangeBackground={this.ChangeBackgroundColor} 
                color={this.state[dsp_top].color}
                bgcolor={this.state.background_top}
                bordercolor={this.state[dsp_top].bordercolor} 
                size={this.state[dsp_top].size}
                font={this.state[dsp_top].font}
                underline={this.state[dsp_top].underline}
                bold={this.state[dsp_top].bold}
                cursive={this.state[dsp_top].cursive}
                uppercase={this.state[dsp_top].uppercase}
                border={this.state[dsp_top].border}
                centered={this.state[dsp_top].centered}
                />
          <Displayer  title={this.state.title} 
                      text={this.state.text} 
                      display='top' 
                      num_displays = {this.state.num_displays}
                      handleChangeText={this.ChangeText} />
        </div>
        <div id='container-copy' className='hide-display'>
          <div className='btn-copy' onClick={this.CopyParameters}>Copy Format <FontAwesomeIcon icon={faArrowDown} /></div>
        </div>
        <div id='container-bottom' className='hide-display'>
          <Options id='form-options_bottom'
                        display='bottom'
                        handleChange={this.ChangeParameterText} 
                        handleChangeCurrent={this.ChangeCurrentText} 
                        handleChangeBackground={this.ChangeBackgroundColor} 
                        color={this.state[dsp_bottom].color}
                        bgcolor={this.state.background_bottom}
                        bordercolor={this.state[dsp_bottom].bordercolor}
                        size={this.state[dsp_bottom].size}
                        font={this.state[dsp_bottom].font}
                        underline={this.state[dsp_bottom].underline}
                        bold={this.state[dsp_bottom].bold}
                        cursive={this.state[dsp_bottom].cursive}
                        uppercase={this.state[dsp_bottom].uppercase}
                        border={this.state[dsp_bottom].border}
                        centered={this.state[dsp_bottom].centered}
                        />
          <Displayer  title={this.state.title} 
                      text={this.state.text} 
                      display='bottom' 
                      num_displays = {this.state.num_displays}
                      handleChangeText={this.ChangeText} />
        </div>
      </main>
    );
  }
};

export default FontVisualizer;