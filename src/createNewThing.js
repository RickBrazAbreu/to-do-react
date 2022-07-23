import React, { Component, useState } from 'react';

function App(){

    const [tasks, setTask] = useState([]);

    const addTask = (task) => {
        setTask([...tasks, task])
    }

    return(
        <div className='App'>
            <Form onSave = {addTask}  />
            <List tasks={tasks}  />

        </div>
    );
}

export function Form(props){
    const {onSave} =props;

    const [text, setText] = useState(" ")

    return (
        <div>
            <input placeholder='Add new thing to do..'  onChange={(e) => setText(e.currentTarget.value)} />
            <button onClick={() => onSave(text)}> ADD</button>
        </div>
    );
}

export function List(props) {
   const {tasks} = props;
        
            return(
                <div>
                    {tasks.map(task => {
                        return (
                        <div> 
                            <span>{task}</span>
                            {/* <button>Delete</button>
                            <button>Done</button> */}
                        </div>
                        );
                    })}
                    

                </div>

            );
       
   


}

export default App