import React from 'react'
import Html from '../Images/html.png'
import CSS from '../Images/css.png'
import JS from '../Images/js.png'
import Aeact from '../Images/react.png'
import Node from '../Images/node.png'
import Sql from '../Images/sql.png'
import '../Style/skills.css'

const Skills = () => {
  return (
    <div className='container'>
      <div className='skills'>
        <img src={Html} alt="" className='img' />
        <p>
          Creating and structuring content using HTML elements.Defining semantic meaning with header, paragraph, list, link, image, and form elements. Organizing content with divisions, sections, articles, and headers. Enhancing user experience with links, buttons, forms, and input types.
        </p>
      </div>
      <div className='skills'>
        <img src={CSS} alt="" className='img' />
        <p>
          Styling HTML elements with selectors and properties. Defining layouts, spacing, and positioning. Enhancing user experience with animations and transitions. Creating responsive designs for various devices. Managing typography, colors, and backgrounds. Implementing design systems and frameworks. 
        </p>
      </div>
      <div className='skills'>
        <img src={JS} alt="" className='img' />
        <p>
          Implementing dynamic behavior and interactivity on web pages. Manipulating HTML documents, event handling, and user interactions. Developing front-end logic, animations, and visual effects. Creating modules, functions, and reusable code. Handling asynchronous tasks, data fetching, and APIs
        </p>
      </div>
      <div className='skills'>
        <img src={Aeact} alt="" className='img' />
        <p>
          Building reusable UI components and managing state changes. Writing clean, modular, and            maintainable code Handling event handling, props, and lifecycle methods. Implementing component lifecycles, state management, and context APIs. Debugging and troubleshooting component-related issues
        </p>
      </div>
      <div className='skills'>
        <img src={Node} alt="" className='img' />
        <p>
          Building scalable and high-performance server-side applications. Writing efficient and modular JavaScript code for servers. Handling HTTP requests and responses, routing, and middleware. Implementing database interactions, CRUD operations, and data validation. Managing server-side logic, authentication, and authorization. Ensuring security, error handling, and exception management. Debugging and troubleshooting server-side issues
        </p>
      </div>
      <div className='skills'>
        <img src={Sql} alt="" className='img' />
        <p>
          Designing and implementing databases with appropriate schema. Creating, modifying, and optimizing database queries. Ensuring data integrity, consistency, and normalization. Manipulating data with CRUD operations (Create, Read, Update, Delete). Indexing and optimizing database performance. Debugging and troubleshooting query issues. Optimizing database storage and scalability

        </p>
      </div>
      
    </div>
  )
}

export default Skills