import { useState,useCallback,useEffect,useRef} from "react"


function App() {
  const[length,setLength]=useState(20);
  const[numberallowed,setNumberallowed]=useState(false);
  const[characters,setCharacters]=useState(false);
  const[Password,setPasword]=useState("");
  const passwordRef=useRef(null);
  const PasswordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberallowed){
      str+="1234567890"
    }
    if(characters){
      str+="@#$%^&*()"
    }

    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length +1)
      pass+=str.charAt(char);
    }

    setPasword(pass);
  },[length,numberallowed,characters,setPasword])
 const copypasswordtoclipboard=useCallback(()=>{

  passwordRef.current?.select();
 window.navigator.clipboard.writeText(Password);

 },[Password])
  useEffect(()=>{PasswordGenerator()
  },[length,numberallowed,characters,setPasword])

  return (
    <>
<div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 my-40 text-orange-500 text-center text-2xl bg-gray-900">
<h1 className="text-white text-center  ">PasswordGenerator</h1>
    <div className="flex  rounded-lg overflow-hidden  px-8 py-8">
        <input 
            type="text" 
            value={Password} 
            className="outline-none w-full py-1 px-3" 
            placeholder="password" 
            ref={passwordRef}
            readOnly
        />
        <button onClick={copypasswordtoclipboard}className="outline-none bg-blue-700 text-white px-3 py-0.2 ">Copy</button>
    </div>
    <div className="flex text-sm gap-x-4">
      <div className="flex items-center gap-x-1">
        <input type="range" 
       min={6}
        max={50}
        value={length} 
        className="cursor-pointer"
        onChange={(e)=>{
          setLength(e.target.value)
        }}/>
       
        <label >Length:{length}</label>

      </div>
      <div className="flex items-center gap-x-1 ">
        <input 
        type="checkbox"
        defaultChecked={numberallowed}
        id="numberinput"
        onChange={()=>{
          setNumberallowed((prev)=>!prev);
        }} />
      </div>
      <label htmlFor="numberinput">Numbers</label>
      <div className="flex items-center gap-x-1 ">
        <input 
        type="checkbox"
        defaultChecked={characters}
        id="characters"
        onChange={()=>{
          setCharacters((prev)=>!prev);
        }} />
      </div>
      <label htmlFor="characters">Characters</label>
    </div>
</div>

    </>
  )
}

export default App
