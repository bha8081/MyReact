import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

          <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shodow-lg"
          style={{backgroundColor: "red"}}>Red</button>

          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shodow-lg"
          style={{backgroundColor: "blue"}}>blue</button>

          <button 
          onClick={() => setColor("orange")}
          className="outline-none px-4 py-1 rounded-full text-white shodow-lg" 
          style={{backgroundColor: "orange"}}>Orange</button>

          <button 
          onClick={() => setColor("magenta")}
          className="outline-none px-4 py-1 rounded-full text-white shodow-lg" 
          style={{backgroundColor: "magenta"}}>Magenta</button>

          <button 
          onClick={() => setColor("gray")}
          className="outline-none px-4 py-1 rounded-full text-white shodow-lg" 
          style={{backgroundColor: "gray"}}>Gray</button>

          <button 
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shodow-lg" 
          style={{backgroundColor: "green"}}>Green</button>

          <button 
          onClick={() => setColor("yellow")}
          className="outline-none px-4 py-1 rounded-full text-white shodow-lg" 
          style={{backgroundColor: "yellow"}}>Yellow</button>

          <button 
          onClick={() => setColor("black")}
          className="outline-none px-4 py-1 rounded-full text-white shodow-lg" 
          style={{backgroundColor: "black"}}>Black</button>

          <button 
          onClick={() => setColor("maroon")}
          className="outline-none px-4 py-1 rounded-full text-white shodow-lg" 
          style={{backgroundColor: "maroon"}}>Maroon</button>

          <button 
          onClick={() => setColor("DarkSlateGrey")}
          className="outline-none px-4 py-1 rounded-full text-white shodow-lg" 
          style={{backgroundColor: "DarkSlateGrey"}}>DarkGrey</button>

          <button 
          onClick={() => setColor("lime")}
          className="outline-none px-4 py-1 rounded-full text-white shodow-lg" 
          style={{backgroundColor: "lime"}}>Lime</button>

          <button 
          onClick={() => setColor("OrangeRed")}
          className="outline-none px-4 py-1 rounded-full text-white shodow-lg" 
          style={{backgroundColor: "OrangeRed"}}>OrangeRed</button>

          <button 
          onClick={() => setColor("teal")}
          className="outline-none px-4 py-1 rounded-full text-white shodow-lg" 
          style={{backgroundColor: "teal"}}>Teal</button>

        </div>
      </div>
    </div>
  )
}

export default App