import React from 'react'
import '../Style/profilecontent.css'
import { Link } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LinkIcon from '@mui/icons-material/Link';
import TwitterIcon from '@mui/icons-material/Twitter';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';


const profilecontent = () => {
  return (
  
    <div className='main-content'>
      <div>
        <h4 className='name'>A Shariq Hasan</h4>
        <p className='description'>Welcome to my world of Web Development!</p>
        <p className='link-heading'>Find me on below</p>
        <div className='media-links'>
          
          <Link> <EmailIcon/> </Link>
          <Link> <LinkedInIcon/> </Link>
          <Link> <WhatsAppIcon/> </Link>
          <Link> <FacebookIcon/> </Link>
          <Link> <InstagramIcon/> </Link>      
          <Link> <GitHubIcon/> </Link>
          <Link> <LinkIcon/> </Link>
          <Link> <TwitterIcon/> </Link>
          
          
        </div>
      </div>

      <div className='side-content'>
        <div className='cbox'>
          
          <div className='box'>
            <h3 className='work'><span><SensorOccupiedIcon/></span>Currently Working At</h3>
            <p>Integrass</p>
          </div>

          <div className='box'>
            <h3 className='work'><span><SensorOccupiedIcon/></span>Studied My UG At</h3>
            <p>Integrass</p>
          </div> 
        
      </div>
    </div>
        
    </div>

    


  )
}

export default profilecontent