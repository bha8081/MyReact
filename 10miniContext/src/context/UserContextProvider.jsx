import React from "react";
import UserContext from "./UserConext.js";

const UserConextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)

    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserConextProvider