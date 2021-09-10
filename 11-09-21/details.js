import React from "react";

export default function Show(props){
    return(
        <>
      
      <div className="container my-2 ">
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
    
  {props.list.map((value,key)=>{
      return (
        <>
        <tr>
      <td>{value.id}</td>
      <td>{value.email}</td>
      <td>{value.city}</td>
      <td>{value.zip}</td>   
    </tr>
      </>
      )
})}
  </tbody>
</table>
</div>
        </>
    )

}


  {/* <p>{props.email}</p>
      <p>{props.city}</p>
      <p>{props.zip}</p> */}
