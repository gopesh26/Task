import React,{useState} from 'react';
import './form.css'
import Form2 from './Form2';
import Form3 from './Form3';

export default function Form(){
  const[page,setpage] = useState(1);  
  const[data,setdata]=useState([]);
  const[data2,setdata2]=useState([]);
  
  
  const childToParent = (key,value) => {
    setdata(data => [...data,  value]); 
    validation(value)
  }
   
  //const data2 =[]
  const form2 =(lname,add,mob)=>{
    setdata2([...data2, [lname,add,mob]]);
  //data2.push([lname,add,mob]) 
    validation2([lname,add,mob]);
}

 
  function local(){  
    localStorage.setItem('form1',[data]);
  }
  
  function local2(){
    localStorage.setItem('form2',[data2]);    
  }
  
  function nextpage(){
    setpage(page+1);
  }   

  function ppage(){
    setpage(page-1);
  }   

  var c;
  function validation(value){
    c = localStorage.form1.split(',');
    for (var i =0;i<c.length;i++){
      if (value===c[i]){
        alert("this data already exist");
        break;
      }
    }
    
  }
  var v;
  function validation2(val){

    v = localStorage.form2.split(',');
    console.log(val);
    for (var i =0;i<v.length;i++){
      if (val[0]===v[i]){
        alert("last name already exist");
        break;
      }
      else if(val[1]===v[i]){
        alert("Addres already exist");
        break;
      }
      else if (val[2]===v[i]){
        alert("Mobile number already exist");
        break;
      }
    }
    
  }
  
    return(
        <>  
      {page===1 && <Form3 childToParent={childToParent} nextpage={nextpage} ppage={ppage} /> }
      {page===2 && <Form2 nextpage={nextpage} ppage={ppage} local={local} local2={local2} form2={form2}/>}
      {page ===3 && <div>THANK YOU <button type="submit" onClick={()=>{nextpage(); local2()}} >Submit </button> </div>}
      {page ===4 && setpage(page-3)}
      {/* {page===3 && (
            // <div>
            //    form1: <p>{localStorage.getItem('form1')}</p>
               
            //    form2: <p>{localStorage.getItem('form2')}</p>
            // </div>
         )} */}
        </>

    )}