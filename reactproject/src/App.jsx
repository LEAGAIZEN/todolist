import { useState } from "react"

function App() {
  const [color,setColor]=useState("blue")
  const [text,setText]=useState("")

  
  
  return (
    <>
     {text && <p className="fixed  inset-x-0 text-center text-yellow-500">{text}</p>}
      <div className="w-full h-screen duration-200 "
          style={{backgroundColor:color}}
     
      >
    <div className="fixed flex flex-wrap justify-center  bottom-12 inset-x-0 px-2" >
      <div className="flex flex-wrap justify-center gap-3
      bg-white px-3 py-2 rounded-xl">
          <button onClick={()=>{setColor("blue");setText("blue is beautiful");}}className="outline-none px-4 py-1  rounded-full text-white shadow-lg

       " style={{backgroundColor:"blue"}}>
          Blue
          </button>
          <button onClick={()=>{setColor("black"); setText("black is beautiful");}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg

" style={{backgroundColor:"black"

}}>
  
   Black
   </button>
   <button onClick={()=>{setColor("lavender"); setText("lavender is beautiful");}}className="outline-none px-4 py-1 rounded-full text-black shadow-lg

" style={{backgroundColor:"lavender"}}>
  
   Lavender
   </button>
   
   <button onClick={()=>{setColor("green"); setText("green is beautiful");}} className="outline-none px-4 py-1 rounded-full text-black
    shadow-lg

" style={{backgroundColor:"green"}}>
   Green
   </button>
   <button onClick={()=>{setColor("red"); setText("red is beautiful");}}className="outline-none px-4 py-1 rounded-full text-black
    shadow-lg

" style={{backgroundColor:"red"}}>
   Red
   </button>
   <button onClick={()=>{setColor("pink"); setText("pink is beautiful");}} className="outline-none px-4 py-1 rounded-full text-black
    shadow-lg

" style={{backgroundColor:"pink"}}>
   Pink
   </button>
   <button onClick={()=>{setColor("brown"); setText("brown is beautiful");}}className="outline-none px-4 py-1 rounded-full text-black
    shadow-lg

" style={{backgroundColor:"brown"}}>
   Brown
   </button>
   <button onClick={()=>{setColor("white"); setText("white is beautiful");}}className="outline-none px-4 py-1 rounded-full text-black
    shadow-lg

" style={{backgroundColor:"white"}}>
   White
   </button>
   
          </div>
      
    </div>

   

   
      </div>
      
    </>
  )
}

export default App
