import React, { useContext } from 'react'
import { Button, Image } from 'react-bootstrap'
import { UserContext } from '../../context/UserContext'

const Header = () => {

  const {user, setUser, loggedIn, setLoggedIn} = useContext(UserContext)

  const handleLogOut = () => {
    setLoggedIn(false)
    setUser({name: "", img: "batman"})
  }

  return (
    <div className='header'>
        {
        loggedIn && <div> <Image  src={user.img} className="header-img" /> </div>
        }
        <h1>DroneScale Chatt App</h1>
        {loggedIn && <Button className='log-out-btn' variant="danger" onClick={handleLogOut}>Log out</Button>}
    </div>
  )
}

export default Header