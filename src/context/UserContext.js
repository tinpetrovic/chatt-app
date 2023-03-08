import React, { createContext, useState } from 'react'

const UserContext = createContext()

const UserContextProvider = ({children}) => {
  const [user, setUser] = useState({username: "", avatar: "batman"})
  const [loggedIn, setLoggedIn] = useState(false)
  const [drone, setDrone] = useState(null)


  function onUserLogin(username, avatar, id) {
    const drone = new window.Scaledrone(id, {
        data: { username, avatar },
    });
    drone.on("open", () => {
        setDrone(drone)
        setUser({id: drone.clientId, username, avatar})
    })
}

  return (
    <UserContext.Provider value={{user, setUser, loggedIn, setLoggedIn, drone, setDrone, onUserLogin}}>
        {children}
    </UserContext.Provider>
  )
}

export {UserContext, UserContextProvider}