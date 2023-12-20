import React from 'react'
import '../Style/navbar.css'
// import logo from '../Images/logo.gif'
import toogle_light from '../Images/night.png'
import toogle_dark from '../Images/day.png'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import LightModeSharpIcon from '@mui/icons-material/LightModeSharp';



const Navbar = ({theme, setTheme}) => {

  const toogle_mode = ()=>{
    theme === "light" ? setTheme('dark') : setTheme('light')
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

      {/* <LightModeSharpIcon onClick = {()=>{toogle_mode()}} src={theme === "light" ? <LightModeSharpIcon/> : <Brightness4Icon/>} className='toogle-icon'/> */}

      <img onClick = {()=>{toogle_mode()}} src={theme === "light" ? toogle_light : toogle_dark} className='toogle-icon'/>



    </div>
  )
}

export default Navbar