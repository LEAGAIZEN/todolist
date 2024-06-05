// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
const myobj={
name:'hero',
class:'7',
}
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Kisuke Urahara des yo</h1>
      <Card channel="chaiaurcode" btnText="click me"/>
      <Card channel="yorichi" btnText="visit  me"/>
    </>
  )
}

export default App
