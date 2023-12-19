import './App.css';
import Profile from './Components/Profile';
import ProfileContent from './Components/ProfileContent';
import NavBar from './Components/Navbar';
import MainContent from './Components/MainContent';
import { useState } from 'react';

function App() {

  const [theme, setTheme] = useState('light')

  return (
    <div className= {`app ${theme}`}>
      <NavBar theme={theme} setTheme ={setTheme}/>
      <Profile/>
      <ProfileContent/>
      <MainContent/>

    
      
    </div>
  );
}

export default App;
