import React, {useState, useEffect, useRef} from 'react'

export default function App(){
  const [name, setName] = useState('');
  const inputRef = useRef();
  
  useEffect(()=>{
    inputRef.current.focus()
  })
  
  return (
    <>
    <input ref={inputRef} value={name} onChange={e =>setName(e.target.value)}/>
    <div> My name is {name}</div>
    <button onClick={focus}>Focus</button>
    </>
)
}
