import React from 'react'
import '../Style/profilecontent.css'
import { Link } from '@mui/material'

import Email from '../Images/gmail.png'
import LinkedIn from '../Images/linkedin.png'
import Whatsapp from '../Images/whatsapp.png'
import Facebook from '../Images/facebook.png'
import Instagram from '../Images/instagram.png'
import Github from '../Images/github.png'
import Twitter from '../Images/twitter.png'
import Website from '../Images/link.png'


import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import SchoolIcon from '@mui/icons-material/School';
import Typical from 'react-typical'



const profilecontent = () => {
  return (
  
    <div className='main-content'>
      <div className='left-box'>
        <h1 className='name'>A Shariq Hasan</h1>
        <p className='description'>
          {""}
          <Typical
              loop={Infinity}
              steps={[
                "Welcome to my world of Web Development!", 1500,
                "I am passionate junior React Developer", 1500,
                "My projects & sample works below", 1500,
                "Leave your comments! Much Appreciated", 1500,
                "Thanks in Advance", 1500,
              ]}
          />          
        </p>

        <p className='link-heading'>Find me on below</p>
        <div className='media-links'>
          
          <Link> <img src={Email} alt="" className='icons' /> </Link>
          <Link> <img src={LinkedIn} alt="" className='icons' /> </Link>
          <Link> <img src={Whatsapp} alt="" className='icons' /> </Link>
          <Link> <img src={Facebook} alt="" className='icons'/> </Link>
          <Link> <img src={Instagram} alt="" className='icons' /> </Link>
          <Link> <img src={Github} alt="" className='icons' /> </Link>
          <Link> <img src={Twitter} alt="" className='icons' /> </Link>
          <Link> <img src={Website} alt="" className='icons' /> </Link>


        

        </div>
      </div>

      <div className='side-content'>
        <div className='cbox'>
          
          <div className='box'>
            <h3 className='work'><span><BadgeOutlinedIcon/></span>Currently Working at Integrass</h3>
            <p className='current'>As a Intern - Programmer</p>
          </div>

          <div className='box'>
            <h3 className='work'><span><SchoolIcon/></span>Studied in Bishop Heber College</h3>
            <p className='current'>Bsc.Computers</p>
          </div> 
        
      </div>
    </div>
        
    </div>

    


  )
}

export default profilecontent