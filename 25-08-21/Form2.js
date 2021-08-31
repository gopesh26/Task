import React,{useState} from 'react';
import './form.css'

export default function Form2(props){

    const [lname, setlname] = useState('');
    const [add, setadd] = useState('');
    const [mob, setmob] = useState('');

    return (
        <>
        <div className="form">
        <input type="text" placeholder="Last Name" value={lname} onChange={(e)=>setlname(e.target.value)}></input>
        <input type="text" placeholder="Address" value={add} onChange={(e)=>setadd(e.target.value)} ></input>
        <input type="Mobile Number" placeholder="Mobile Number" value={mob} onChange={(e)=>setmob(e.target.value)}></input>
        
        </div>

        <button onClick={()=>{props.ppage()}} >Pervious</button>   
        <button onClick={()=>{props.form2(lname,add,mob);props.nextpage();props.local();props.local2()}}>Next</button> 

        <br></br>
        </> 
    )
}

