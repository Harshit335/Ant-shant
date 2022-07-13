import './App.css';
import AceEditor from "react-ace";

import 'ace-builds/src-noconflict/ace';
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import TemplateFile from './templateFile';
import CodeEditor from './templateFile';
import { useState } from 'react';

// const [value, setValue] = useState("");

function selectText(containerid) {
  console.log(";;;;;;;;;;;;");
  if (document.selection) { // IE
      var range = document.body.createTextRange();
      range.moveToElementText(document.getElementById(containerid));
      range.select();
      console.log("//////////////");
  } 
  // else if (window.getSelection) {
  //   console.log("############");
  //     var range = document.createRange();
  //     range.selectNode(document.getElementById(containerid));
  //     window.getSelection().removeAllRanges();
  //     window.getSelection().addRange(range);
  // }
};

function onChange(newValue) {
  console.log("change", newValue);
}

function handleClick(){
    var iframe = document.getElementById("template-frame");
    var elmnt = iframe.contentWindow.document.getElementById("members");
    elmnt.click(selectText('members'));
    // alert(elmnt.innerHTML);
    // elmnt.style.display = "none";

    var editorFrame = document.getElementById("editor-frame");
    var editorDoc = editorFrame.contentDocument || editorFrame.contentWindow.document;
    var getDiv = editorDoc.getElementById("editor");
    // var getDiv = editorDoc.getElementById("editor").querySelectorAll(".editorContent");
    getDiv.innerHTML = elmnt.innerHTML;

    // alert(getDiv.innerHTML);
    // onChange(elmnt.innerHTML);

    // updateValue = elmnt.innerHTML;
};

// function onChanging() {
//   const content = document.querySelector('#tempContent');
//   const [file] = document.querySelector('input[type=file]').files;
//   const reader = new FileReader();

//   reader.addEventListener("load", () => {
//     // this will then display a text file
//     content.innerText = reader.result;
//   }, false);

//   if (file) {
//     reader.readAsText(file);
//   }
//   var codeText = reader.result;
//   return codeText;
// }

// function onChanging(event) {
//   var file = event.target.files[0];
//   var reader = new FileReader();
//   reader.onload = function(event) {
//     // The file's text will be printed here
//     // console.log(event.target.result)
//   };
//   console.log("llllllll");
//   reader.readAsText(file);
//   console.log(file);
// }

// document.getElementById('inputfile')
//             .addEventListener('change', function() {
              
//             var fr=new FileReader();
//             fr.onload=function(){
//                 document.getElementById('output')
//                         .textContent=fr.result;
//             }
              
//             fr.readAsText(this.file);
//         })


// var template = document.getElementsByTagName('iframe').contentDocument;
// var selectedDiv = template.getElementsById('members-div');
// alert(selectedDiv.innerHTML);


// const message = document.getElementById("message");

// main document must be focused in order for window blur to fire when the iframe is interacted with. 
// There's still an issue that if user interacts outside of the page and then click iframe first without clicking page, the following logic won't run. But since the OP is only concerned about first click this shouldn't be a problem.
// window.focus()

// window.addEventListener("blur", () => {
//   setTimeout(() => {
//     if (document.activeElement.tagName === "IFRAME") {
//       message.innerHTML = "clicked " + Date.now();
//       console.log("clicked");
//     }
//   });
// }, { once: true });


// function clickedFrame(){
//   // var iFrame = document.getElementById("template-frame");
//   // var elmnt = iFrame.contentWindow.document.getElementById("members-div");
//   // var detector = setInterval(function() {
//   //   var elem = document.activeElement;
//   //   if (elem == elmnt) 
//   //   {
//   //     alert("Click detected inside iframe.");
//   //     clearInterval(detector);
//   //   }
//   // }, 100);
//   var iframe = document.getElementById('template-frame');
//   var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
//   alert(innerDoc.getElementById('members').innerHTML);
//   // alert(iframe);

// }


function App() {
  const [value, setValue] = useState("");
  function updateValue(){
    // const content = document.querySelector('#tempContent');
    const [file] = document.querySelector('input[type=file]').files;
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      // this will then display a text file
      // content.innerText = reader.result;
      var codeText = reader.result;
      console.log(codeText);
      setValue(codeText);
    }, false);

    if (file) {
      reader.readAsText(file);
    }
    var codeText = reader.result;
    console.log(codeText);
    setValue(codeText);
  }
  return (
    <div className="App">
      <div className="row">
        <div className="column" id="template-area">
          {/* <div dangerouslySetInnerHTML={htmlfiletemp.html}></div> */}
          {/* <div dangerouslySetInnerHTML={{__html: htmlContent}}></div> */}
          {/* <input type="file" name="inputfile" id="inputfile"></input> */}
          <input type="file" onChange={updateValue}></input>
          {/* <div id='tempContent' style={{textAlign: "left"}}></div> */}
          <AceEditor
            mode="java"
            theme="github"
            // onClick={updateValue}
            name="UNIQUE_ID_OF_DIV"
            editorProps={{ $blockScrolling: true }}
            value={value}
          />
            {/* <iframe src="htmlfiletemp.html" id="template-frame" title="description" height="700px" width="700px"></iframe> */}
            {/* <TemplateFile/> */}
            {/* <embed id="template-frame" type="text/html" src="htmlfiletemp.html" height="700px" width="700px" onLoad={clickedFrame}></embed> */}
            {/* <script>$("#template-frame").contents().find("#members-div").html("new HTML content goes here");</script> */}
        </div>
        <div className="column">
            <div className="column-2-row">
                <div className="column-upper">
                    <div className="border-box-upper">
                        hI
                    </div>
                </div>
                <div className="column-lower">
                    <div className="border-box-lower">
                        <button onClick= {handleClick}>Members</button>
                        {/* <iframe src="code-editor.html" id="editor-frame" title="description" height="370px" width="700px"></iframe> */}
                        {/* <CodeEditor/> */}
                        {/* <AceEditor
                              mode="java"
                              theme="github"
                              // onClick={updateValue}
                              name="UNIQUE_ID_OF_DIV"
                              editorProps={{ $blockScrolling: true }}
                              value={value}
                            /> */}
                            {/* ,document.getElementById("example") */}
                        {/* <div id="editor"></div> */}
                        {/* <button onClick={updateValue}>Confirm</button> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

// "devDependencies": {
//   "@babel/core": "^7.18.6",
//   "@babel/preset-env": "^7.18.6",
//   "@babel/preset-react": "^7.18.6",
//   "babel-loader": "^8.2.5",
//   "css-loader": "^6.7.1",
//   "html-loader": "^3.1.2",
//   "html-webpack-plugin": "^5.5.0",
//   "webpack": "^5.73.0",
//   "webpack-cli": "^4.10.0"
// }

export default App;
