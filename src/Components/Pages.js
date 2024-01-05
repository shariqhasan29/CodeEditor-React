import React from 'react'
import '../Style/pages.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Project from '../Pages/Project'
import Skills from '../Pages/Skills'
import Career from '../Pages/Career'
import Contact from '../Pages/Contact'


const Pages = () => {
  return (
    <div>
        <BrowserRouter>
            <ul className='nav'>
              <li><Link to='react-projects' className='link'>Projects</Link></li>
              <li><Link to='React-Projects/skills' className='link'>Skills</Link></li>
              <li><Link to='React-Projects/career' className='link'>Career</Link></li>
              <li><Link to='React-Projects/contact' className='link'>Contact</Link></li>
            </ul>
        
            <Routes>
                <Route path ="React-Projects/" element ={<Project/>}/>
                <Route path ="React-Projects/skills" element ={<Skills/>}/>
                <Route path ="React-Projects/career" element ={<Career/>}/>
                <Route path ="React-Projects/contact" element ={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Pages