import React, {useContext} from 'react'
import UserContext from '../context/UserConext';

function Profile() {
    const {user} = useContext(UserContext)

    if(!user) return <div className='text-2xl text-blue-600 text-center'>please login</div>

    return <div className='text-3xl text-sky-500 text-center py-5'>Welcome to Content Creation {user.userName}</div>
}

export default Profile;