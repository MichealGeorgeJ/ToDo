import React, { useState } from 'react';

const ToDoEdit = ({ todo, handleEdit, handleClose,setUpdatedDoTos }) => {
  const [editId,setEditedId]=useState(todo.id);
  const [editedTaskName, setEditedTaskName] = useState(todo.taskName);
  const [editedDescription, setEditedDescription] = useState(todo.Description);
  const [editedStatus, setEditedStatus] = useState(todo.status);
   
  const handleSave = () => {
    const editedToDo={
      id:editId,
      taskName:editedTaskName,
      Description:editedDescription,
      status:editedStatus,
    };
    handleClose();
    setUpdatedDoTos((prevToDos) =>
      prevToDos.map((todo) =>
        todo.id === editedToDo.id ? editedToDo : todo
      )
    );
      // console.log(prevEditedToDO);
    };
  
 

  const handleModalClose = () => {
    handleClose();
  };

  return (
    <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit ToDo</h5>
            <button
              type="button"
              className="close"
              aria-label="Close"
              onClick={handleModalClose}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="container">
                <div className="row d-flex">
                  <div className="col-lg-6 mb-3">
                    <input
                      type="text"
                      className="w-100 p-1"
                      
                      onChange={(e) => setEditedTaskName(e.target.value)}
                      value={editedTaskName}
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="w-100 p-1"
                      
                      onChange={(e) => setEditedDescription(e.target.value)}
                      value={editedDescription}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSave }
              data-dismiss="modal"
            >
              Save
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleModalClose}
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ToDoEdit;