import './App.css';
import ChildComponent from './file1';
import React ,{useState,createContext} from 'react'

const userDetailContext = createContext();

function App() {
    var [userDetails] = useState({
        name: "Gopesh",
        age: 22
      });

    return (
        <>
        <userDetailContext.Provider value={userDetails}>
        <h1>This is the Parent Component</h1>
        <hr></hr>
        <ChildComponent userDetails={userDetails} />
        </userDetailContext.Provider>
        </>
    );
}

export default App;
export {userDetailContext};
