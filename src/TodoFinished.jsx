import React from 'react'

const TodoFinished = ({todoList, setTodoList}) => {
  


  const handleClick = (id) => {
    const removeItem = todoList.filter((todo) => {
      return  todo.id !== id;
    })
    setTodoList(removeItem)
  }
  
    return (
    <ul>
     {todoList.map((todo) => (

        <div className="p-2 relative" key={todo.id}>
         <li className="bg-slate-300 rounded-lg">
        <div className=" font-bold p-2">{todo.title}
        </div> 
         <div className=" italic p-2">{todo.deadline}:  {todo.status}</div> 
         <i className="fa-sharp fa-regular fa-pen-to-square absolute top-3 right-8 p-2"></i>
         <i className="fa-regular fa-trash-can absolute top-3 right-2 p-2 cursor-pointer" onClick={()  => handleClick(todo.id)}  ></i>  
           </li>
        </div>
     ))}
    </ul>
  )
}

export default TodoFinished