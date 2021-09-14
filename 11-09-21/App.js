import './App.css';
import React,{useState} from 'react';
import Axios from 'axios'
// import Show from './details.js'


function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [list, setList] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [newemail, setNewemail] = useState('');

  function addemployee(){
    Axios.post('http://localhost:3001/create',{email:email,password:password,city:city,zip:zip}).then(()=>{console.log("success")});
  }

  function updateemployee(id){
    Axios.put("http://localhost:3001/update",{email:newemail, id: id}).then((response)=>{alert("updated")})
  }

  function deleteemployee(id){
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response)=>{
      setList(list.filter((val)=>{
        return val.id !==id
      }))
    })
  }

  function details(){
    Axios.get('http://localhost:3001/details').then((response)=>{setList(response.data)});
    setToggle(!toggle)
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
    <button type="submit" className="btn btn-primary" onClick={addemployee}>Submit</button>
  </div>
  
  <hr></hr>
</form>
<button type="button" className="btn btn-success" onClick={details}>Show</button>

{/* {console.log(list)} */}
{/* { toggle && <Show list={list}></Show>} */}
{ toggle && <div className="container my-2 ">
      <table className="table ">
      <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Email</th>
      <th scope="col">City</th>
      <th scope="col">Pincode</th>
    </tr>
  </thead>
  <tbody>
    
  {list.map((value,key)=>{
      return (
        <>
        <tr>
      <td>{value.id} </td>
      
      <td>{value.email} 
      <input type='txt' placeholder="update email" onChange={(event)=>{setNewemail(event.target.value)}}/> 
      <button type="button" className="btn btn-success" onClick={()=>{updateemployee(value.id)}}>update</button>
      <button type="button" className="btn btn-danger" onClick={()=>{deleteemployee(value.id)}}>delete</button>
      </td>
      
      <td>{value.city}</td>
      <td>{value.zip}</td>  
    </tr>
   
      </>
      )
})}
  </tbody>
</table>
</div>}

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
