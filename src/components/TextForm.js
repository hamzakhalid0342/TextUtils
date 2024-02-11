import React , {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        //console.log("Button uppercase was clicked" + text)
        let newText = text.toUpperCase()
        setText(newText);
        props.showAlert(" Converted to Uppercase", "Success")
    }
    const wordCount = (text)=>{
      let regex = /\s+\S+/;
      let numOfWords = text.split(regex);
      return numOfWords.length;
    }
    function handle() {
        if (text) {
          // Split the text into sentences based on periods
          let sentences = text.split('.');
      
          // Capitalize the first letter of each sentence
          let capitalizedSentences = sentences.map((sentence, index) => {
            if (sentence.trim() !== '') {
              let firstLetter = sentence.trim()[0].toUpperCase();
              let restString = sentence.trim().slice(1);
              return (index === 0 ? '' : ' ') + firstLetter + restString;
            } else {
              return sentence; // Handle empty sentences
            }
          });
      
          // Join the sentences back together with periods
          let resultText = capitalizedSentences.join('.');
      
          setText(resultText);
          props.showAlert(" Converted to FirstCap case" , "Success")
        }
      }
    

    const handleLoClick = () => {
        //console.log("Button Lowercase was clicked" + text)
        let newText = text.toLowerCase()
        setText(newText);
        props.showAlert(" Converted to Lowercase" , "Success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value)

    }
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert(" Removed extra spaces", "Success")
    }

    const [text, setText] = useState("")
  return (
    <>
    <div className='container' style= {{color : props.mode==='dark'?'white':'black'}}>
      <div className="mb-3">
        <h1 className='mt-5 mb-3'> {props.heading}</h1>
        <textarea
          className="form-control"
          value = {text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
          style= {{backgroundColor : props.mode==='dark'?'#2d2d30':'white' , color : props.mode==='dark'?'white':'black'}}
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handle}>Convert to FirstCap case</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
    </div>
    <div className="container my-4" style= {{color : props.mode==='dark'?'white':'black'}}>
        <h1>Text Summary</h1>
        <p>{text===""? 0 : wordCount(text)} words and {text.length} characters</p>
<p>{ text===""? 0 * 0.008 : wordCount(text) * 0.008} Minutes read</p>
        <h2> Preview </h2>
        <p>{text.length>0?text:"Enter your text above to Preview here"}</p>
    </div>
    
    </>
  );
  }
