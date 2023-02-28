import { useState } from "react"

const AddTask = ({onAdd}) => {
     const [text,setText] = useState('')
     const [day,setDay] = useState('')
     const [reminder,setReminder] = useState(false)

     const onSubmit = (e)=>{
        e.preventDefault()
        if(!text){
            alert('Please add a task')
            return
        }
        onAdd({text,day,reminder})

        setText('')
        setDay('')
        setReminder(false)

     }
  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control ">
            <label>Task</label><br/>
            <input type='text' placeholder='Add Task' className="input-block" value={text} onChange={(e)=>setText(e.target.value)}/>
        </div>
        <div className="form-control">
            <label>Day and Time</label><br/>
            <input type='text' placeholder='Add Day and Time' className="input-block" value={day} onChange={(e)=>setDay(e.target.value)}/>
        </div>
        <div className='form-control'>
            <label>Set Reminder</label>
            <input type='checkbox' className="form-control-check" value={reminder} checked={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)} />
        </div>
        <input type='submit' value='Save Task' className='btn2 btn-block'/>
        </form>
  )
}

export default AddTask