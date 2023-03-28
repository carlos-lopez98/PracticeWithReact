import React, {useState} from 'react'

/* Named exports allow you to declare multiple components, then export one at a time or multiple
   Into another file for use */
export const RenderString = () => {

    const [textInput, setTextInput] = useState("")

    const [output, setOutput] = useState("") 

    /* Function updates textInput to equal my newInput being passed in */
    function handleTextInputChange(event){
        setTextInput(event.target.value)
    }
    /* Solution is to have an input and output variable, output variable is assigned on buttonclick */
    function onbuttonClick(){
      setOutput(textInput)
    }

    /* This will always render what the value for textInput is */
    function RenderString({output}){
        return (
            <ul>
                <li>{output}</li>
            </ul>
        )
    }

  return (
    <div className="TopLevelContainer">
        <h1>RenderString</h1>
        <div className='TextInputContainer'>
            <h1>Enter Text</h1>
            {/* The way I'm using the onChangeListener is by callback function aka anonymously */}
            <input type="text" value={textInput} onChange={handleTextInputChange}></input>
            <button onClick={() => {
                onbuttonClick()
            }}>Click Me To Change Below Text!</button>   

        </div>

       <RenderString output={output}/>
        </div>
  )
}
