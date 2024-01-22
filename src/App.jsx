import React, { useState } from 'react';
import Title from './components/Title';
import NewTask from './components/NewTask';
import ToDoCards from './components/ToDoCards';
;

const App = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [updatedToDos, setUpdatedDoTos] = useState([]);
  const [status, setStatus] = useState('Not Completed');
  const [filter, setFilter] = useState('All');
  const [editTodoId, setEditTodoId] = useState(null);

  const addToDo = (e) => {
    const toDos = {
      id: Date.now(),
      taskName: title,
      Description: description,
      status: status,
    };

    setUpdatedDoTos([...updatedToDos, toDos]);
    setTitle('');
    setDescription('');
  };

  const handleChange = (e, id) => {
    setUpdatedDoTos((prevToDos) =>
      prevToDos.map((todo) =>
        todo.id === id ? { ...todo, status: e.target.value } : todo
      )
    );
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };


  const handleDelete = (id) => {
    setUpdatedDoTos((prevToDos) => prevToDos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <Title />
      <NewTask
        setTitle={setTitle}
        setDescription={setDescription}
        AddToDo={addToDo}
        title={title}
        description={description}
      />
      <ToDoCards
        toDocards={updatedToDos}
        handleSelectChange={handleChange}
        handleFilter={handleFilter}
        filter={filter}
        handleDelete={handleDelete}
        
        setUpdatedDoTos={setUpdatedDoTos}
      />
     
    </div>
  );
};

export default App;