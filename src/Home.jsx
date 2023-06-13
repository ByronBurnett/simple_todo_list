import React from 'react'
import { useState } from 'react';
import TodoList from "./TodoList";


const Home = () => {
  
    const [isShown, setIsShown] = useState(false);
    
    const handleClick = e => {
     setIsShown(current => !current)

    };


  
    return (
    <div>
       <div className=" flex justify-center m-5"> 
      <h2 className="font-bold text-3xl">Todo List</h2>
      </div>
      <div className="flex justify-center"> 
      <button onClick={handleClick} className=" bg-blue-800 text-white p-2 m-5">Add ToDo</button>
      </div>
       <div className="flex justify-center"> 
      {isShown && <TodoList  /> }
      </div>


    </div>
  )
}

export default Home