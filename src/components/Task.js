

const Task = ({task,onDelete,onToggle}) => {
  return (
    <div className={`task ${task.reminder ? 'reminder':''}`} onDoubleClick={()=>{onToggle(task.id)}}>
        <div>
        <h3>{task.text}</h3>
        <p>{task.date}</p>
        </div>
        <i class="fa-solid fa-trash" onClick={()=>onDelete(task.id)} style={{color:'black ',cursor:'pointer'}}></i>  
    </div>
  )
}

export default Task