import './App.css'
import Card from './components/Card'

function App() {
  // let myObj = {
  //   username: "Bhavesh",
  //   age: 24
  // }
  return (
    <>
        <h1 className='font-bold text-orange-500 rounded-lg border-4 border-orange-600 bg-slate-950 px-2 py-2 text-center mb-4'>Hello Bhavesh</h1>
        <Card username="Ankush" btnText="click me"/>
        <Card username="Shubham"/>
    </>
  )
}

export default App
