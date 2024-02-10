
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message,  type) => {
    setAlert({
      msg: message,
      type: type
    }
    )
    setTimeout(() => {
      setAlert(null)
    }, 1000);

  }
 let toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#2d2d30'
      showAlert(" Dark Mode has been enabled" , "Success")
    }
    else
    {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert(" Light Mode has been enabled" , "Success")
    }
  }
  return (
    <>
    <Router>
    <Navbar mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3" >
    <Routes>
    <Route path="/home" 
          element={<TextForm showAlert={showAlert} heading= "Enter your text to analyze" mode={mode} toggleMode={toggleMode}/>}>
          </Route>
          <Route path="/about" element={<About/>}>
    </Route>
        </Routes>
    </div>
   </Router>
</>
  );
}

export default App;
