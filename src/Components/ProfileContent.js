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
            <h3 className='work'><span><BadgeOutlinedIcon/></span>Currently Working at Integrass</h3>
            <p className='current'>As a Intern</p>
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