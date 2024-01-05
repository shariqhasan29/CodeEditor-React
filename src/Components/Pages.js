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
              <li><Link to='/' className='link'>Projects</Link></li>
              <li><Link to='/skills' className='link'>Skills</Link></li>
              <li><Link to='/career' className='link'>Career</Link></li>
              <li><Link to='/contact' className='link'>Contact</Link></li>
            </ul>
        
            <Routes>
                <Route path ="/" element ={<Project/>}/>
                <Route path ="/skills" element ={<Skills/>}/>
                <Route path ="/career" element ={<Career/>}/>
                <Route path ="/contact" element ={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Pages