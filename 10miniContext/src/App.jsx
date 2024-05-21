import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserConextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserConextProvider>
      <Login />
      <Profile />
    </UserConextProvider>
  )
}

export default App