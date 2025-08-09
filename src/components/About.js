import React, { useState } from 'react';
import PropTypes from 'prop-types'

const Dark = (props ) => {
    // const [ mystyle,setstyle]=useState({
    //              color:"grey",
    //              backgroundColor:"white"
    // })
    // const [ btntxt,setbtntxt]=useState("Enable Dark Mode")
    // const togglebtn=()=>{
    //     if(mystyle.color==="grey"){
    //         setstyle({
    //              color:"white",
    //              backgroundColor:"grey"
    //              }
    //             )
              
    //             setbtntxt("Enable Light Mode")
    //     }
    //     else{
    //         setstyle({
    //              color:"grey",
    //              backgroundColor:"white"
    //              })
    //                setbtntxt("Enable Dark Mode")
    //     }
    // }
     let mystyle={
    color: props.mode === "dark" ? "white" : "black",
      backgroundColor:props.mode==="dark"? "rgb(4, 39, 67)" :"white",
    }
   
    return (
      <>
  <h1 className='text-center mb-4' style={{color:props.mode==="dark" ? "white" :'black'}}>About Word Counter</h1>
<div style={mystyle} className=" w-[98vw] h-[98vh]  p-6 m-2 rounded shadow-md" >
  <p style={mystyle} >A paragraph word counter is a tool, either built into word processors or available online, that automatically counts the number of words in a piece of text, typically a paragraph. These tools can also provide additional information like character count (with and without spaces), sentence count, and paragraph count. They are useful for tracking writing progress, meeting specific length requirements for assignments or publications, and optimizing content for different platforms with character limits. </p>
  <h1 className='text-center mb-4' style={{color:props.mode==="dark" ? "white" :'black'}}>How it works</h1>
<p style={mystyle}> Word counters analyze the text you input, whether you type it directly into a tool or paste it from another source. They then count the number of words, characters, sentences, and paragraphs based on predefined rules. For example, they typically identify spaces and line breaks as word delimiters, and periods, exclamation points, and question marks as sentence delimiter.</p>
  
</div>
</>
)
}
export default Dark;