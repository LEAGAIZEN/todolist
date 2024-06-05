
import { useState } from 'react';
import './App.css'
function App() {
  // useState(5)
  const [counter,setCounter]=useState(15);
 const addvalue =()=>{
  if(counter>=20){
    return;
  }
  setCounter(counter+1);
  console.log("clicked");
console.log(counter);
console.log("notpossible");
}
const remvalue=()=>{
  if(counter<=0){
    console .log("not possinle");
    return;
  }
  setCounter(counter-1);
  console.log("decreased");
  
}

  return (
    <>
   <h1>counter</h1>
   <h2>Counter value : {counter}</h2>
   <button onClick={addvalue}>Add Value</button>
   <br />
   <button onClick={remvalue}>Remove Value</button>
    </>
  )
}

export default App
