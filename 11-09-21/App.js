import './App.css';
import React,{useState} from 'react';
import Axios from 'axios'
import Show from './details.js'

function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [list, setlist] = useState([]);
  const [toggle, settoggle] = useState(false);

  function addemployee(){
    Axios.post('http://localhost:3001/create',{email:email,password:password,city:city,zip:zip}).then(()=>{console.log("success")});
  }

  function details(){
    Axios.get('http://localhost:3001/details').then((response)=>{setlist(response.data)});
    settoggle(!toggle)
  }

  return (
    <>
    <div className="container position-absolute top-50 start-50 translate-middle w-50">
      <form className="row g-3 ">
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4" value={email} onChange={(event)=>{ setEmail(event.target.value)}}/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4" value={password} onChange={(event)=>{setPassword(event.target.value)}}/>
  </div>
  
  <div className="col-md-6">
    <label htmlFor="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity" value={city} onChange={(event)=>{setCity(event.target.value)}}/>
  </div>
 
  <div className="col-md-2">
    <label htmlFor="inputZip" className="form-label">Pincode</label>
    <input type="text" className="form-control" id="inputZip" value={zip} onChange={(event)=>{setZip(event.target.value)}}/>
  </div>
  <br></br>
  <div className="col-12">
    <button type="submit" className="btn btn-primary" onClick={addemployee}>Update</button>
  </div>
  
  <hr></hr>
</form>
<button type="button" className="btn btn-success" onClick={details}>Show</button>

{/* {console.log(list)} */}
{ toggle &&<Show list={list}></Show>}
</div>

    </>
  );
}

export default App;



{/* {list.map((value,key)=>{
      return (
        <>
        <Show email={value.email} city={value.city} zip={value.zip} id={list.length}></Show>
      <p>{value.email}</p>
      <p>{value.city}</p>
      <p>{value.zip}</p>
      </>
      )
})} */}
