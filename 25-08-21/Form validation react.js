import React,{useState} from 'react';
import './form.css'

export default function Form3(props){

    const [fname, setfname] = useState('');

    return (
    <>
    <div className="form">
    <form> 
    <input type="text" placeholder="First Name" vlaue={fname} onChange={(e)=>setfname(e.target.value)}></input><br></br> 
    </form>  
    </div>
    <button type="submit" onClick={()=>{props.ppage()}}>Previous</button>    
    <button type="submit" onClick={()=>{props.childToParent('fname',fname);props.nextpage()}}>Next</button>  
    
    </> 
    )
}

  
    // function handleFname(e) {
    //     setfname(e.target.value);
    //   }
