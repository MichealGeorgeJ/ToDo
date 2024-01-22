import React from 'react'

const NewTask = ({setTitle,setDescription,AddToDo,title,description}) => {
  return (
    <div>
      <div className="container">
       <form action="" onSubmit={(e)=>{e.preventDefault();AddToDo(); }} >
       <div className="row d-flex justify-content-between">
          <div className="col-lg-5 ">
            <input type="text" className='border border-success w-100 p-2  mt-4'placeholder='Todo Name' onChange={(e)=>setTitle(e.target.value)} value={title} required />
          </div>
          <div className="col-lg-5 ">
          <input type="text" className='border border-success w-100 p-2  mt-4 'placeholder='Todo Description' onChange={(e)=>setDescription(e.target.value)} value={description} required />
          </div>
          <div className="col-lg-2 d-flex justify-content-center mt-4 mb-3">
            <button type="submit" className='btn btn-success w-100 p-2  ' >Add Todo</button>
          </div>
        </div>
       </form>
       
      </div>
    </div>
  )
}

export default NewTask;