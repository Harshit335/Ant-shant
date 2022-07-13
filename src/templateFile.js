import React, { Component } from 'react';

class TemplateFile extends Component {

  constructor(props) {
    super(props);
  }

  showFile = async (e) => {
    e.preventDefault()
    const reader = new FileReader()
    reader.onload = async (e) => { 
      const text = (e.target.result)
      console.log(text)
      alert(text)
      document.getElementById('templateArea').innerText = text;
    };
    reader.readAsText(e.target.files[0])
  }

  render = () => {

    return (<div>
      <input type="file" onChange={(e) => this.showFile(e)} />
      <div id='templateArea' style={{textAlign: "left"}}></div>
    </div>
    )
  }
}

export default TemplateFile;