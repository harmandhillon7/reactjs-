import { useState } from "react"

function App() {
  const [color, setcolor]= useState("olive");


  return (
    
    <div className="w-full h-screen duration-200"
      style= {{backgroundColor : color}}
    >
      <div className="rounded-3xl px-2 py-2 mx-2  fixed flex flex-wrap  justify-center display-flex bottom-6 bg-white ">
        <div className=" rounded-md text-center text-yellow-700 flex flex-wrap justify-center gap-1  ">
          <button
           onClick={()=>{
            setcolor("red")
           }} className="rounded-2xl px-1 py-1 bg-red-600">red</button>
          <button 
          onClick={()=>{
            setcolor("blue")
           }} className="rounded-2xl px-1 py-1 bg-blue-600">blue</button>
          <button
          onClick={()=>{
            setcolor("yellow")
           }} className="rounded-2xl px-1 py-1 bg-yellow-600">yellow</button>
          <button
          onClick={()=>{
            setcolor("pink")
           }} className="rounded-2xl px-1 py-1 bg-pink-600">pink</button>
          <button 
          onClick={()=>{
            setcolor("black")
           }}className="rounded-2xl px-1 py-1 bg-black">black</button>
          <button
          onClick={()=>{
            setcolor("orange")
           }} className="rounded-2xl px-1 py-1 bg-orange-600">orange</button>






          </div>

      </div>
    </div>
      
    
  );
}

export default App
