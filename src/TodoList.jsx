import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import TodoFinished from './TodoFinished';

const TodoList = () => {
  

  const [title, setTitle] = useState('');
  const [deadline, setDeadline] = useState('');
  const [status, setStatus] = useState('');
  const [todoList, setTodoList]  = useState([]);

  

  
  //create Add Todo Function
  const handleSubmit = (e) => {
  e.preventDefault()
  
      const todo = 
       {
        id: uuidv4(),
        title:title,
        deadline:deadline,
        status: status,
       } 
      setTodoList([...todoList, todo])
      setTitle('')
      setDeadline('')
      setStatus('')
      console.log(todoList)
       
  }

 
  
    return (
  <div className="bg-white p-4 rounded-lg shadow-lg"> 
   <form  onSubmit={handleSubmit}>
   <input type="text" 
   required
   placeholder='Title'
   value={title}
   onChange={(e) => setTitle(e.target.value)}
   className="block w-72 p-2 m-2 border-solid border-2 border-indigo-600"
   />
   <input type="text"
    required
   placeholder='Deadline'
   value={deadline}
   onChange={(e) => setDeadline(e.target.value)}
   className="block w-72 p-2 m-2 border-solid border-2 border-indigo-600"
   />
      <select className='block w-72 p-2 m-2 border-solid border-2 border-indigo-600'
       value={status}
       onChange={(e) => setStatus(e.target.value)}
       required
      >
        <option value=""></option>
        <option value="Not started">Not Started</option>
        <option value="In progess">In progress</option>
        <option value="Done">Done</option>
      </select>
   
   
 
    <div className="ml-28"> 
   <button className="bg-indigo-700 text-white p-2 m-2 rounded-lg">Add Todo</button>
   </div>
   
   </form>
  <TodoFinished todoList={todoList} setTodoList={setTodoList}   />
   </div>
   
  )
}

export default TodoList