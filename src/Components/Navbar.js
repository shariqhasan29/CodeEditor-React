import React from 'react'
import '../Style/navbar.css'
import logo from '../Images/logo.png'
import logo1 from '../Images/logo1.png'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import LightModeSharpIcon from '@mui/icons-material/LightModeSharp';



const Navbar = ({theme, setTheme}) => {

  const toogle_mode = ()=>{
    theme === "light" ? setTheme('dark') : setTheme('light')
  }

  


  return (
    <div className={`navbar ${theme}`}>

      {theme === "light" ? <img src={logo} alt="" className='logo'/> : <img src={logo1} alt="" className='logo'/>}
      

      
      {theme === "light" ? <LightModeSharpIcon onClick = {()=>{toogle_mode()}} className='toogle-icon'/> : <Brightness4Icon onClick = {()=>{toogle_mode()}} className='toogle-icon'/>}

    </div>
  )
}

export default Navbar