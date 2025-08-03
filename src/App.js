
import './App.css';
// import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Dark from "./components/About";
import Alert from "./components/Alert";
import { useState } from 'react';

function App() {
  const [alert,setalert]=useState(null)
  const showalert=(message,type)=>{
     setalert({
    msg: message,
    type: type
  })
  setTimeout(() => {
    setalert(null);
  },1500);
}

  const[ mode, setmode]=useState("light")
   const togglemode=()=>{
    if(mode==="light"){
      setmode("dark");
      document.body.style.backgroundColor= "rgb(4, 39, 67)";
      showalert("Dark mode is Enabled","Success")
      document.title="Textuttils-Dark"
    }
    else{
      setmode("light");
      document.body.style.backgroundColor='white';
       showalert("Light mode is Enabled","Success")
             document.title="Textuttils-Light"

    }
  }
  return (
    <>
   {/* <Router> */}
<Navbar  toggleMode={togglemode}  mode= {mode}/>
 <Alert alert={alert}/>
 <div className= "container my-3" >
  {/* <Routes> */}
  {/* <Route path='/' element={ */}
    <Textform  showalert={showalert} heading="Enter the text to Analyze( Word Counter)" mode= {mode}/>
{/* }/> */}
  {/* <Route path='/About' element={ */}
    <Dark />
    {/*  }/> */}
  {/* </Routes> */}
 </div>
 {/* </Router> */}
</>
  );}

export default App;
