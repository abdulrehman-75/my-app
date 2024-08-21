import React, {useState} from 'react';

export default function textarea(props) {
    const[text, setText] = useState("")
    const handleChange = (event) => {
     setText(event.target.value)
    }
    const handleUp = () => {
        // console.log("i am clicked")
      setText(text.toUpperCase());
    }
    const handleLow = () => {
      setText(text.toLowerCase());
    }
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className='container my-3'>
      <textarea value={text} onChange={handleChange} className='form-control' id='myBox' rows={10}
      style={{backgroundColor: "#b9b9b9"}}></textarea>
      <button className='btn btn-primary ' onClick={handleUp}>convert to uppercase</button>
      <button className='btn btn-primary mx-2' onClick={handleLow}>convert to lowercase</button>
      </div>
      <h2>Summary:</h2>
      <p>{text.split(" ").filter((text) => text !== "").length} Words and {text.length} Characters</p>
    </div>
  )
}
