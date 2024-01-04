import React from 'react'
import '../Style/body.css'
import Profile from './Profile'
import ProfileContent from './ProfileContent'
import MainContent from './Route'

const content = () => {
  return (
    <div className='body'>
        <Profile/>
        <ProfileContent/>
        <MainContent/>

    </div>
  )
}

export default content