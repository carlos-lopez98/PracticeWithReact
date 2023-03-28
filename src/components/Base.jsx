import React, {useState} from 'react'

/* Here we have a main Base React component, that renders a list
   Using a nested RenderTasks component  */

function Base() {
    // TODO: Define a state variable that holds a list of items
    // useState can be used to manage it's state
    const [tasks, setTask] = useState (["Wash Dishes",
    "Clean Towels", 
    "Clean Floor", 
    "Feed Dog"]);

    //Variable that holds our newTask, manages it using the useState Hook
    const [newTask, setNewTask] = useState("")

    /* This receives our item we input then set's it as our new Item */
    function handleInputChange(event){
        setNewTask(event.target.value) 
    }

    /* Adds a new task to our list */
    function addTask(newTask){
        
        setTask([...tasks, newTask])
    }

    /* Renders our list of tasks onto screen */
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
            {/* When you use a newItem/method it must be defined for it to work */}
            <input type="text" value={newTask} onChange={handleInputChange}/>
            <button className="input_button" label="Add Item" onClick={() => addTask(newTask)}>Add Item</button>
        </div>


      <RenderTasks tasks={tasks} />
      </div>
  )
}

export default Base