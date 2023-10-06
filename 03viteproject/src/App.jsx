import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)
  let myobj={
    username : "harman",
    age: 21
  }

  return (
    <>
      <h1 className='bg-green-400 tex-white '>tailwind test</h1>
      <Card obj={myobj}/>
       
    </>
  )
}

export default App
