import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  //let counter = 5

  const addValue = () => {
      //counter = counter + 1;
      //setCounter(counter + 1)

      if(counter < 20) {
        setCounter(counter + 1)
      } else {
        console.log("Invalid number")
      }
  }

  const removeValue = () => {
      if(counter > 0) {
        setCounter(counter - 1)
      } else {
        console.log("Remove only above the zero value.")
      }
  }

  return (
    <>
        <h1>Welcome to Counter Game</h1>
        <h2>Counter value: {counter}</h2>

        <button onClick={addValue}>Add Value</button>
        <br />
        <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
