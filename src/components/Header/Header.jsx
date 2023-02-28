import React, { useContext } from 'react'
import { Button, Image } from 'react-bootstrap'
import { UserContext } from '../../context/UserContext'

const Header = () => {

  const {user, setUser, loggedIn, setLoggedIn, drone, setDrone} = useContext(UserContext)

  const handleLogOut = () => {
    drone.close()
    setDrone(null)
    setLoggedIn(false)
    setUser({username: "", avatar: "batman"})
  }

  return (
    <div className='header'>
        {
        loggedIn && <div> <Image  src={user.avatar} className="header-img" /> </div>
        }
        <h1>DroneScale Chatt App</h1>
        {loggedIn && <Button className='log-out-btn' variant="danger" onClick={handleLogOut}>Log out</Button>}
    </div>
  )
}

export default Header