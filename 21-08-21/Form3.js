import React,{useState,useEffect} from 'react';
import './form.css'

export default function Form3(props){


    const [fname, setfname] = useState('');
    
    function handleFname(e) {
        setfname(e.target.value);
      }
      useEffect(() => {
      localStorage.setItem('fname',fname)
      }, [input])

    return (
        <>
      <div className="form">
    <form> 
    <input type="text" placeholder="First Name" vlaue={fname} onChange={handleFname}></input><br></br> 
    </form>
    <button onClick={()=>{props.childToParent(fname);props.nextpage()}}>Next</button>    
    </div>

        </> 
    )
}

