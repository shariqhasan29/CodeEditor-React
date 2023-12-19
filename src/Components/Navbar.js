import React from 'react'
import { Link } from '@mui/material'
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import '../Style/navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>

        <ul className='links'>
            <li><Link color={'#f5f5f5'}>About Me</Link></li>
            <li><Link color={'#f5f5f5'}>Resume</Link></li>
            <li><Link color={'#f5f5f5'} >Ask Me Some thing</Link></li>  
            
        </ul>
        <ul className='settings'>
            <li><Link color={'#f5f5f5'}>Settings <span><SettingsSuggestIcon/></span></Link></li>
        </ul>
          
    </div>
  )
}

export default Navbar