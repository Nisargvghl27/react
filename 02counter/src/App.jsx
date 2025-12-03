import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setcounter]=useState(15);

  // let counter = 15;

  const addValue=()=>{
    // console.log("value added",Math.random());
    
    // counter=counter+1;
    // setcounter(counter);
    
    if(counter<25) setcounter(counter+1);
    else alert("counter cannot exceed 25");
    console.log("Added",counter);

    // setcounter(prevcounter=>prevcounter+1);
    // setcounter(prevcounter=>prevcounter+1);
    // setcounter(prevcounter=>prevcounter+1);
    // setcounter(prevcounter=>prevcounter+1);

  }

  const removeValue=()=>{
    if(counter>0) setcounter(counter-1);
    else alert("Counter cannot be negative");
    console.log("Removerd",counter);
  }

  return (
    <>
      <h1>Hello to kese he aap log</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter} </button>
      <br />
      <button onClick={removeValue}>Remove Value {counter} </button>
      <p> footer : {counter}</p>
    </>
  )
}

export default App;