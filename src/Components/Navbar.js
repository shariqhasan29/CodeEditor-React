import React from 'react'
import { Link } from '@mui/material'
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import '../Style/navbar.css'
import logo_light from '../Images/logo-black.png'
import logo_dark from '../Images/logo-white.png'
import toogle_light from '../Images/night.png'
import toogle_dark from '../Images/day.png'



const Navbar = ({theme, setTheme}) => {

  const toogle_mode = ()=>{
    theme == "light" ? setTheme('dark') : setTheme('light')
  }


  return (
    <div className='navbar'>
      {/* <img src={theme == "light" ? logo_light : logo_dark} alt="" className='logo'/> */}

      <ul>
        <li>About Me</li>
        <li>My Resume</li>
        <li>Ask Me</li>
        <li>Commands</li>
      </ul>

      <img onClick = {()=>{toogle_mode()}} src={theme == "light" ? toogle_light : toogle_dark} alt="" className='toogle-icon'/>










        {/* <ul className='links'>
            <li><Link color={'#f5f5f5'}>About Me</Link></li>
            <li><Link color={'#f5f5f5'}>Resume</Link></li>
            <li><Link color={'#f5f5f5'} >Ask Me Something</Link></li>  
            
        </ul>
        <ul className='settings'>
            <li><Link color={'#f5f5f5'}>Settings <span><SettingsSuggestIcon/></span></Link></li>
        </ul> */}
          
    </div>
  )
}

export default Navbar