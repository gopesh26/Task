import React from "react";
import { useSelector,useDispatch } from "react-redux";

export default function Counter(){
   const dispatch = useDispatch();
   const count = useSelector(state=>state.counter);
   
    const inc = ()=>{
        dispatch({type:'inc'});
    }; 
    const dec = ()=>{
        dispatch({type:'decr'});
    }; 

   function counterhandler(){
       //
   }
   
    return (
        <div className="px-96 m-2">
        <div className=" grid grid-cols-1 space-y-2  m-8 shadow w-96 px-36 py-2">
        <div className=" text-purple-900 text-7xl pl-2">{count} </div>
        <div>
        <button className="bg-purple-600 rounded 
         hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 
         focus:ring-opacity-50 h-8 w-20 p-1" onClick={inc} > <span>&#43;</span> </button> </div>
          
       <div> <button className="bg-purple-600 rounded col-6
         hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 
         focus:ring-opacity-50 h-8 w-20 p-2" onClick={dec}><span> &#8722;</span></button> </div>
     {/* <div> <button className="bg-purple-600 rounded
         hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 
         focus:ring-opacity-50 h-200 w-20 p-2 " onClick={counterhandler}>Click</button> </div>   */}
       </div>
       </div>
    )
}