import React,{useContext}  from 'react';
import './App.css';
import {userDetailContext} from './App'


export default function File2(props) {
  const contextData = useContext(userDetailContext)

    return (
      <>
      <h3>This is Sub Child Component</h3>
      <h4>User Name: {contextData.name}</h4>
      <h4>User Age: {contextData.age}</h4>
      </>
    );
}


