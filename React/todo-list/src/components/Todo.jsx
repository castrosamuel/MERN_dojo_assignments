import React, { useState } from  'react';

const Todo = (props) => {
    const [task, setTask] = useState({text:"",completed:false});
    const [listOfTasks, setListOfTasks] = useState([]);

    const addTask = e => {
        e.preventDefault();
        setListOfTasks([...listOfTasks, task]);
        setTask({text:"",completed:false})
    }

    const insertTask = e => {
        setTask({
            ...task,
            [e.target.name]:e.target.value
        })
    }

    const deleteTask = (e, i) =>{
        let newTaskList = listOfTasks.filter((data,idx)=>{
            return idx !== i
        })
        setListOfTasks(newTaskList);
    }

    const handleToggle=(e, idx)=>{
        const updatedTasks = listOfTasks.map((d, i)=>{
            if(idx === i){
                d.completed = !d.completed;
                // const updatedData = {...data, completed: !d.completed}
            }
            return d;
        })
        setListOfTasks(updatedTasks)
        
    }

	return(
        <div>
            <h1>Todo List</h1>
            <form onSubmit={addTask}>
                <div>
                    <input type="text" onChange={(e) => insertTask(e)} value={task.text} name="text"/>
                    <input type="submit" value="Add" />
                </div>
            </form>
            {
                listOfTasks.map((item, i) => {
                const line = () =>{
                    if (item.completed === true){
                        return "line-through";
                    } else {
                        return "none";
                    }
                }
                
                return <div key={i}>
                    <p><span style={{textDecoration:line()}}>{item.text}</span> <input onChange={(e)=>handleToggle(e,i)} type="checkbox" unchecked/> <input type="button" onClick = {(e)=>deleteTask(e,i)} value="Delete" /></p> 
                </div>
                
                })
            }
        </div>
    )
};

export default Todo;
