import React, { useState } from 'react';

const Dark = () => {
    const [ mystyle,setstyle]=useState({
                 color:"black",
                 backgroundColor:"white"
    })
    const [ btntxt,setbtntxt]=useState("Enable Dark Mode")
    const togglebtn=()=>{
        if(mystyle.color==="black"){
            setstyle({
                 color:"white",
                 backgroundColor:"black"
                 }
                )
                setbtntxt("Enable Light Mode")
        }
        else{
            setstyle({
                 color:"black",
                 backgroundColor:"white"
                 })
                   setbtntxt("Enable Dark Mode")
        }
    }
   
    return (
<div  style={mystyle} className=" w-[98vw] h-[98vh] bg-white border border-gray-400 p-6 m-2 rounded shadow-md" >
  <h2 className="text-2xl font-bold mb-4"style={mystyle}>Full Screen Box</h2>
  <p style={mystyle}>A toggle button is a user interface element that allows users to switch between two states, such as "on" and "off" or "dark mode" and "light mode." It functions like a switch—clicking it once activates a feature, and clicking it again deactivates it. Toggle buttons are commonly used in modern web applications to improve user experience by letting users control settings like themes, visibility, or preferences in real-time. They are easy to implement with a bit of JavaScript or React logic, and can be styled using CSS or utility frameworks like Tailwind CSS for smooth transitions and clear visual feedback.</p>
  <button className="btn btn-primary" onClick={togglebtn}> {btntxt}</button>
</div>




 
 

)
}



export default Dark;