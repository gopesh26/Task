import React,{useState} from 'react';
import './form.css'
import Form2 from './Form2';
import Form3 from './Form3';


export default function Form(){


  const[page,setpage] = useState(1);
  const[f3data,fdata] = useState('');

  const childToParent = (childdata) => {
    fdata(childdata);
  }

  function nextpage(){
     setpage(page+1);
  }   

    return(
        <>
        {f3data}
      {page===1 && <Form3 childToParent={childToParent} nextpage={nextpage}/>}
      {page===2 && <Form2 nextpage={nextpage}/>}
      {page ===3 && <div>THANK YOU</div>}
      
        </>

    )}