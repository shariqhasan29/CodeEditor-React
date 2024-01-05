import React from 'react'
import todo from '../Images/todo.jpg'
import "../Style/project.css"



const Project = () => {
  
  return (
    <div className='project-container'>

      {todos()}
      {todos()}
      {todos()}
      {todos()}
      {todos()}
      {todos()}     
        
    </div>
  )
}

const todos = () => {
  return (
    <div className='projects'>
        
        <img src={todo} alt="" className='img'/>
      
        <h3>To-Do-List</h3>
        <p>It is used to create your daily tasks and you can able to update, delete and mark as done for your reference. </p>
        <button>Tab to View</button>
        <button>Source Code</button>


    </div>
  )
}




export default Project
