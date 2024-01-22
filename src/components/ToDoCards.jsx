import React, { useState } from 'react';
import ToDoEdit from './Edit';

const ToDoCards = ({ toDocards, handleSelectChange, handleFilter, filter, handleDelete, handleEdit, setUpdatedDoTos }) => {
  const [editingTodo, setEditingTodo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = (todo) => {
    setEditingTodo(todo);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setEditingTodo(null);
    setIsModalOpen(false);
  };

  const renderCards = () => {
    const filteredCards = toDocards.filter((e) => {
      if (filter === 'All') {
        return true; // Show all todos
      } else if (filter === 'Completed') {
        return e.status === 'Completed';
      } else if (filter === 'Not Completed') {
        return e.status === 'Not Completed';
      }
  
      return false; // Default case, should not happen
    });
  
    return filteredCards.map((e, id) => (
      <div className="col-lg-4 mb-4" key={id}>
        <div className="card card-body" style={{ backgroundColor: "#ace1af" }}>
          <p>Name: {e.taskName}</p>
          <p>Description: {e.Description}</p>
          <div className='d-flex'>
            <p>Status :</p>
            <select
              name="status"
              id="status"
              className='bg-danger'
              onChange={(event) => handleSelectChange(event, e.id)}
              value={e.status}
            >
              <option value="Not Completed">Not Completed</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div className="d-flex justify-content-end mt-5">
            <button className="btn btn-success px-4 mx-3" onClick={() => handleEditClick(e)}>
              Edit
            </button>
            <button className="btn btn-danger" onClick={() => handleDelete(e.id)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    ));
  };


  return (
    <div>
      <div className="container mt-5">
        <div className="row d-flex justify-content-between">
          <div className='col-lg-6 col-sm-5'><h4>My Todos</h4></div>
          <div className='col-lg-6 col d-flex justify-content-end'><h4>Status Filter:</h4>
            <select name="filter" id="filter" className='bg-danger' onChange={(e) => handleFilter(e)}>
              <option value="All">All</option>
              <option value="Completed">Completed</option>
              <option value="Not Completed">Not Completed</option>
            </select>
          </div>
        </div>
        <div className="row mt-5 d-flex justify-content-between">
          {renderCards()}
        </div>
      </div>
{/* {console.log(toDocards)} */}
      {isModalOpen && (
        <ToDoEdit
          todo={editingTodo}
          handleEdit={handleEdit}
          handleClose={handleCloseModal}
          setUpdatedDoTos={setUpdatedDoTos} 
        />
      )}
    </div>
  );
};

export default ToDoCards;