import React ,{ useState} from 'react';
import PropTypes from 'prop-types';



const Textform = (props) => {
  const uppercase=()=>{
   settext( text.toUpperCase());
    props.showalert("Text in UpperCase","Success")

  }
   const Capitalized=()=>{
    const arr=text.split(" ")
    const capital=arr.map(word=>{
       return word.charAt(0).toUpperCase()+word.slice(1);
    })
    settext(capital.join(" "))
     props.showalert("First Letter is capitalized","Success")
   }


  const findAndReplace = () => {
  const find = prompt("Enter word to find:");
  const replaceWith = prompt("Replace with:");
  const newText = text.replaceAll(find, replaceWith);
  settext(newText);
   props.showalert("Replace","Success")
};
  const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
      props.showalert("Speaking","Success")
}
   const clear=( )=>{
     settext("");
     props.showalert("Text is Clear","Success")
  }
  const handlechange=(event )=>{
     settext(event.target.value)
  }
  const lowercase=()=>{
    settext(text.toLowerCase());
    props.showalert("Text in LowerCase","Success")
  }
  const [text, settext ]=useState("")
  return ( 
    <>
  <div className='container' style={ {color: props.mode==="dark"?"white":"black"}}>
    <h1>{props.heading}</h1>
   <div className="mb-3">
     <textarea className="form-control" value={text} style={{backgroundColor:props.mode==="light"?"white":"grey",color: props.mode==="dark"?"white":'black'}}  onChange={handlechange} id="exampleFormControlTextarea1" rows="6"></textarea>
     </div>
     <button className="btn btn-primary mx-1 " onClick={uppercase}>Convert To UpperCase</button>
      <button className="btn btn-primary" onClick={lowercase}>Convert To lowerCase</button>
            <button className="btn btn-primary  mx-1  " onClick={clear}>Clear Text</button>
          <button onClick={findAndReplace} className="btn btn-primary mx-1">Find & Replace</button>
            <button className="btn btn-primary  mx-1  " onClick={Capitalized}>First Letter Capital</button>

            <button type="submit" onClick={speak} className="btn btn-warning mx-3 ">Speak</button>


  <div className="container my-3" styel={{color:props.mode==="dark"?"white":"black"}}>
  </div><h2>Your Text Summary:</h2>
   <p > <b>{text.split(" ").length-1}</b> Words and <b>{text.length}</b>Characters </p>
   <p><b>{0.008*text.split(" ").length-1}</b> Minutes Read</p>
   <h2> Preview:</h2>
    <p>{text.length>0?text:"Please Write Something To Show In Preview"}</p>

  </div>
  </>
  )
}


Textform.propTypes = {
  showalert: PropTypes.func.isRequired,
  heading: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
};


export default Textform;
