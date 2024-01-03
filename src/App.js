import './Style/App.css';
import NavBar from './Components/Navbar';
import { useState } from 'react';

function App() {

  const [theme, setTheme] = useState('light')

  return (
    <div className= {`app ${theme}`}>
      
      <NavBar theme={theme} setTheme ={setTheme}/>
      

    
      
    </div>
  );
}

export default App;
