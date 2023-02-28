import React, { createContext, useState } from 'react'

const UserContext = createContext()

const UserContextProvider = ({children}) => {
  const [user, setUser] = useState({name: "", img: "batman"})
  const [loggedIn, setLoggedIn] = useState(false)
  const [drone, setDrone] = useState(null)

  return (
    <UserContext.Provider value={{user, setUser, loggedIn, setLoggedIn, drone, setDrone}}>
        {children}
    </UserContext.Provider>
  )
}

export {UserContext, UserContextProvider}