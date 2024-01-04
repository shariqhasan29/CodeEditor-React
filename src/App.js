import React from 'react';
import { useState } from 'react';
import './Style/App.css';
import NavBar from './Components/Navbar';
import Body from './Components/Body';



function App() {

  const [theme, setTheme] = useState('light')

  return (
    <div className= {`app ${theme}`}>
      
      <NavBar theme={theme} setTheme ={setTheme}/>
      <Body/>
      
      

    
      
    </div>
  );
}

export default App;
