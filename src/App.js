
import './App.css';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

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
      
    }
    else{
      setmode("light");
      document.body.style.backgroundColor='white';
       showalert("Light mode is Enabled","Success")
            

    }
  }
  // const pallete=()=>{
  //   document.body.classList.remove('bg-primary')
  //   document.body.classList.remove('bg-dange')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-secondary')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-light')
  // }
  //   const togglemode=(cls)=>{
  //     pallete();
  //     document.body.classList.add('bg-'+cls)
  //   if(mode==="light"){
  //     setmode("dark");
      
  //     showalert("Dark mode is Enabled","Success")
      
  //   }
  //   else{
  //     setmode("light");
  //     document.body.style.backgroundColor='white';
  //      showalert("Light mode is Enabled","Success")
             

  //   }
  // }
  return (
    <>
    <Router> 
<Navbar  toggleMode={togglemode}  mode= {mode}/>
 <Alert alert={alert}/>
 <div className= "container my-3" >
    <Routes> 
    <Route path='/' element={<Textform  showalert={showalert} heading="Word Counter  With First Letter UpperCase" mode= {mode}/>
}/>

   <Route path='/About' element={<Dark  mode= {mode}/>}/>
   </Routes> 
 </div>
 </Router>
</>
  );}

export default App;
