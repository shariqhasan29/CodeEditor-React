import React from 'react'
import '../Style/profile.css'
import banner from '../Images/banner.jpeg'
import profilepic from '../Images/Profilepic.jpg'

const Profile = () => {
  return (
    <div className='profile'>
        
        <div className='banner'>

          <img src={banner} alt="" />

        </div>
        <div className='profilepic'>

          <div className='image'>
            <img src={profilepic} alt="" />
            <h2>Please don't touch me <br /> <span></span></h2>
          </div>

            

        </div>
        

    </div>
  )
}

export default Profile