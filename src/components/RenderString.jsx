import React, {useState} from 'react'

/* Named exports allow you to declare multiple components, then export one at a time or multiple
   Into another file for use */
export const RenderString = () => {

    const [textInput, setTextInput] = useState("")

    /* Function updates textInput to equal my newInput being passed in */
    function handleTextInputChange(newInput){
        setTextInput(newInput)
    }

  return (
    <div className="TopLevelContainer">
        <h1>RenderString</h1>
        <div className='TextInputContainer'>
            <h1>Enter Text</h1>
            {/* The way I'm using the onChangeListener is by callback function aka anonymously */}
            <input type="text" value={textInput} onChange= {() => {
                handleTextInputChange(textInput)}}/>
        </div>
        </div>
  )
}
