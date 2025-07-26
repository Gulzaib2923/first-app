
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import Dark from './components/Dark';

function App() {
  return (
    <>
<Navbar  home=" Home" about=" About Us" title=" TextUtils"/>
 <div className= "container my-3" >
<Textform heading="Enter the text to Analyze( Word Counter)"/>
{/* <Dark/> */}
 </div>

</>
  );}

export default App;
