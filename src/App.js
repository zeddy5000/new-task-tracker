import React from 'react';
import Header  from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';
import AddTask from './components/AddTask';



const App = ()=>{
  const [tasks,setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        date: 'January 2nd at 2:30pm',
        reminder:true,
    },
    {
        id: 2,
        text: 'Fifa Match',
        date: 'January 22nd at 2:30pm',
        reminder:true,
    },
    {
        id: 3,
        text: 'Semicolon Party',
        date: 'February 2nd at 2:30pm',
        reminder:true,
    },
])
const [showAddTask,setShowAddTask] = useState(false)
const addTask = (task)=>{
  const id = Math.floor(Math.random() *10000) + 1
  console.log(id)
  const newTask = {id,...task}
  setTasks([...tasks,newTask])
}
const deleteTask = (id)=>{
  setTasks(tasks.filter((task)=> task.id !== id))
}
const toggleReminder = (id)=>{
  setTasks(tasks.map((task)=>task.id === id ? {...task,reminder:!task.reminder} : task))
}

  return(
    <div className="container">
    <Header  title = 'Task Tracker' onAdd = {()=>setShowAddTask(!showAddTask)}  showAdd={showAddTask}/>
    {showAddTask && <AddTask onAdd={addTask}/>}
    {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete = {deleteTask} onToggle={toggleReminder}/>):('No Tasks to show')}
    <div>
   
    </div>
  </div>
  )
  
}


export default App;