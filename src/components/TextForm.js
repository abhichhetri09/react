import React , {useState}from "react";

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpclick = () =>{
       // console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleOnChange = (event) =>{
       // console.log("Handle on change")
        setText(event.target.value)
    }
    const handleLowclick = () => {
        let lowText = text.toLowerCase()
        setText(lowText)
    }
    const handleClear = () => {
        let clearText = ""
        setText(clearText)
    }
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control"  value = {text}  onChange={handleOnChange}id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert upper case</button>
      <button className="btn btn-primary mx-2" onClick={handleLowclick}>Convert lower case</button>
      <button className="btn btn-primary mx-2" onClick={handleClear}>Clear </button>
    </div>
    <div className="container my-2">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").length } Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}
