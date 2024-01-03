import React from 'react'
import '../Style/navbar.css'
// import logo from '../Images/logo.gif'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import LightModeSharpIcon from '@mui/icons-material/LightModeSharp';



const Navbar = ({theme, setTheme}) => {

  const toogle_mode = ()=>{
    theme === "light" ? setTheme('dark') : setTheme('light')
  }

  if(theme){
        
  }


  return (
    <div className='navbar'>
      {/* <img src={logo} alt="" className='logo'/> */}

      <ul>
        <li>About Me</li>
        <li>My Resume</li>
        <li>Ask Me</li>
        <li>Comments</li>
      </ul>

      {theme === "light" ? <LightModeSharpIcon onClick = {()=>{toogle_mode()}} className='toogle-icon'/> : <Brightness4Icon onClick = {()=>{toogle_mode()}} className='toogle-icon'/>}

    </div>
  )
}

export default Navbar