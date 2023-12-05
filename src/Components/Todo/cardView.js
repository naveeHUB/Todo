import React,{useState} from 'react'

export default function CardView({data="",handleedit={handleedit},deleteData={deleteData}}){
    const[position,setposition]=useState(data.Status)
    function setstatus(ds) {
    data.Status = ds
    setposition(data.Status)
}
    return (
        <div className='card' style={{ width: "18rem"}}>
                <h5 className='title'>{data.title}</h5>
                <h6 className='card-item'>Task : {data.title}</h6>
                <h6 className='card-item'>Description : {data.description}</h6>
                <h6 className="card-item dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Status : {data.Status}</h6>
    <ul className="dropdown-menu">
      <li><a className="dropdown-item active" onClick={() =>setstatus("Not Completed")}>Not Completed</a></li>
      <li><a className="dropdown-item" onClick={() =>setstatus("Completed")}>Completed</a></li>
    </ul>
            <div className="card-btn">
                <button className="edit" onClick={() => handleedit(data)}>Edit</button>
                <button className="delete" onClick={() => deleteData(data)}>Delete</button>  
            </div>
        </div>

    )
    }