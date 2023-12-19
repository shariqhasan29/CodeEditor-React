import { Link } from "@mui/material"
import React from 'react'
import '../Style/maincontent.css'




const MainContent = () => {
  return (
    <div className='content'>

        <div className='chead'>

            <ul>
                <li><Link>Mini Projects</Link></li>
                <li> <Link>Application</Link></li>
                
                <li><Link>Career Path</Link></li>
                <li><Link>Skills</Link></li>
            </ul>

           

           
            
            

        </div>

        
    </div>
  )
}

export default MainContent