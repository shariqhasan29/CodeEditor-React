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

          <img src={profilepic} alt="" />

        </div>
        

    </div>
  )
}

export default Profile