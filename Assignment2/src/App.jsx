import React, { useState } from 'react'

const App = () => {
  const[task,settask]=useState("");
  const[todo,settodo]=useState([]);
  
  // Add task

  const addtask =()=>{
    if(task.trim ==='') return;

    settodo([...todo,task]);
    settask("");
    
  }

  // delete task

  const deletetask=(index)=>{

    const updatetodo=todo.filter((_,i) => i!=index);
    settodo(updatetodo);
    
  }
   
  return (
    <div>
      <input 
      type="text"
      placeholder='Here Enter'
      value={task}
      onChange={(e)=> settask(e.target.value)} 
      />

      <button 
      onClick={addtask}
      >Add</button>

      <ul>
        {
          todo.map((todo,index)=>(
            <li id='index'>
              {todo}

              <button onClick={deletetask}>delete</button>

            </li>
            
          ))
        }
      </ul>


    </div>
  )
}

export default App