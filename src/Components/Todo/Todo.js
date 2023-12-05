import React, { useState} from 'react'
import InputText from './inputText'
import CardView from './cardView'


export default function Todo() {
  const [rendTask, setrendTask] = useState([])
  const [task, setTask] = useState({ title: '', description: "", Status: "Not Completed" })
  const[dfilter,setdFilter]=useState("All")
 const[mode,setmode]=useState("create")

  const initialtodo ={title: '', description: "", Status:"Not Completed"}
  function handleData() {
    const taskcopy = [...rendTask]
    if (task.title === "") {
      alert("Task Name is empty");
    } else if(taskcopy.filter((d)=>d.title.toLowerCase() === task.title.toLowerCase()).length > 0){
      alert("Task Name already Exist");
      setTask(initialtodo)
    }
    else {
    taskcopy.push(task)
    setTask(initialtodo)
    setrendTask(taskcopy)
  }
}
  function handleTask(e) {
      let todocopy = {
        ...task
      }
      todocopy['title'] = e.target.value;
      setTask(todocopy)
  }

  function handleDescription(e) {
    let desccopy = {
      ...task
    }
    desccopy['description'] = e.target.value;
    setTask(desccopy)
  }
  function handleedit(e){
    setTask(e)
    setmode("edit")
  }
  function updateData(e){
    if(mode === "edit"){
    let taskscopy = [...rendTask]
      let matcheddata= taskscopy.filter((d)=> d.title !== task.title)
         matcheddata.push(task)
         setrendTask(matcheddata)
         setTask(initialtodo)
        setmode("create")
    }
  }
   
  function deleteData(e){
    let taskscopy = [...rendTask]
      let matcheddata= taskscopy.filter((d)=> d.title !== e.title)
      setrendTask(matcheddata)
      setTask(initialtodo)
      setmode("create")
  }
  let filtered = 
   dfilter === "Not Completed" ? rendTask.filter((item) => item.Status === "Not Completed")
    : dfilter === "Completed" ? rendTask.filter((item) => item.Status === "Completed") : rendTask
  return (
    <div className='container pt-5'>
      <div className='tittle'>My Todo</div>
      <div className='mt-4 d-flex justify-content-center' style={{ fontSize: "1rem" }}>
        <InputText className='textInput' placeholder='Enter Task Name' type='text' id='title' 
        onChange={handleTask} value={task['title']} disabled={mode === "edit"}/>
        <InputText className='textInput' placeholder='Enter Task Description' type='text' id='description' 
        onChange={handleDescription} value={task['description']}/>
        <button className='submit-btn' onClick={mode === "create" ? handleData : updateData}>{mode === "create" ? "Create Task" : "Edit Task"}</button>
      </div>
      <div className='d-flex justify-content-around mt-5 row' style={{ fontSize: "1em" }}>
        <div className='col-8'><b>My Todos</b></div>
        <div className='col-2'><p className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
       <b>Status filter: {dfilter}</b> 
    </p>
    <ul className="dropdown-menu">
      <li><a className="dropdown-item active" onClick={() => setdFilter("ALL")}>All</a></li>
      <li><a className="dropdown-item btn-danger" onClick={() => setdFilter("Not Completed")}>Not Completed</a></li>
      <li><a className="dropdown-item btn-green" onClick={() => setdFilter("Completed")}>Completed</a></li>
    </ul>
    </div>
    <div className='col-2'></div>
      </div>
      {
       filtered.map((d, i) =><div className='card-view' key={`${i}-card`}>
          <CardView data={d} handleedit={handleedit} deleteData={deleteData}/> 
        </div>)
      }
    </div>


  )
}
