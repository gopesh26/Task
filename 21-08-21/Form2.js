import React from 'react'
import './form.css'

export default function form2(props){
    return (
        <>
        <div className="form">
        <input type="text" placeholder="Last Name" ></input>
        <input type="text" placeholder="Address" ></input>
        <input type="Mobile Number" placeholder="Mobile Number"></input>
        <button onClick={()=>{props.nextpage()}}>Next</button>    
        </div>
        <br></br>
        </> 
    )
}