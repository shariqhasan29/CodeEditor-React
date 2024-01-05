import React from 'react'
import '../Style/body.css'
import Profile from './Profile'
import ProfileContent from './ProfileContent'
import Pages from './Pages'


const Body = ({theme, setTheme}) => {


  return (
    <div className={`body ${theme}`}>
        <Profile theme={theme} setTheme ={setTheme}/>
        <ProfileContent theme={theme} setTheme ={setTheme}/>        
        <Pages theme={theme} setTheme ={setTheme}/>
        
        
    </div>
  )
}

export default Body