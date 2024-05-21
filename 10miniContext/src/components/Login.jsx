import React, { useState, useContext } from 'react'
import UserContext from '../context/UserConext'

function Login() {
    
    const [username, setuserName] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

  return (
    <div>
        <h2 className='text-3xl text-green-500 text-center'>Context Login</h2>

        <div className='flex items-center justify-center'>
          <input
            value={username}
            onChange={(e) => setuserName(e.target.value)}
            className='text-1xl p-1 border-4 border-solid border-sky-600 m-4' type="text" placeholder="username" />

          <input 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='text-1xl p-1 border-4 border-solid border-sky-600 m-4' type="text" placeholder="password" />

          <button className='text-1xl p-1 border-4 border-solid border-sky-600 m-4' onClick={handleSubmit}>Submit </button>
        </div>

    </div>
  )
}

export default Login