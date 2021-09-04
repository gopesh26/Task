import React from 'react';
import './App.css';
import File2 from './file2';

export default function ChildComponent(props) {

    return (
      <>
      <h2>This is Child Component</h2>
      <hr></hr>
      <File2/>
      </>
    );
}


