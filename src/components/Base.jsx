import React, {useState} from 'react'

/* Here we have a main Base React component, that renders a list
   Using a nested RenderTasks component  */

function Base() {
    // TODO: Define a state variable that holds a list of items
    // useState can be used to manage it's state
    const [task, setTask] = useState (["Wash Dishes",
    "Clean Towels", 
    "Clean Floor", 
    "Feed Dog"]);

    function addTask(newTask){
        //This will spread out my task items, but then add my newTask
        //To the End of the list
        setTask([...task, newTask])
    }

    function RenderTasks({tasks}){
        return (
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>{task}</li>
                    ))}
                </ul>
        )
    }

  return (
    <div className="containerTopLevel">

        <div className="form-input">
            <input type="text" value={newItem} onChange={handleInputChange}/>


        </div>
      <RenderTasks tasks={task} />



      </div>
  )
}

export default Base