import React, { useContext, useState } from 'react'
import { Form, Button, Container, Row, Col, Image } from 'react-bootstrap'
import { UserContext } from '../../context/UserContext'
import { batman, ninja, warrior, male } from "../../images/index"


const Login = () => {

    const {user, setUser, setLoggedIn, onUserLogin} = useContext(UserContext)
    const [selectedImage, setSelectedImage] = useState(0)
    const [logError, setLogError] = useState(false)
    const CHANNEL_ID = "EaWdVjFo8p9iAdWq"

    const handleChangeUserName = (e) => {
        if (e.target.value !== "") {
            setLogError(false)
        }
        setUser({...user, username: e.target.value})
    }

    const handleChoseAvatar = (e) => {
        if(e.target.src.includes("batman")) {
            setSelectedImage(1);
            setUser({...user, avatar: e.target.src})
        } else if (e.target.src.includes("ninja")) {
            setSelectedImage(2);
            setUser({...user, avatar: e.target.src})
        } else if (e.target.src.includes("warrior")) {
            setSelectedImage(3);
            setUser({...user, avatar: e.target.src})
        } else if (e.target.src.includes("male")) {
            
            setSelectedImage(4);
            setUser({...user, avatar: e.target.src})
        }
        setUser({...user, avatar: e.target.src})
    }


    const handleSubmitForm = (e) => {
        e.preventDefault() 
        if(user.username !== "") {
            onUserLogin(user.username, user.avatar, CHANNEL_ID)
            setLogError(false)
            setLoggedIn(true)
        } else {
            setLogError(true)
        }
    }

  return (
    <Container className='login-cont'>
        <Row className="justify-content-center align-itmes-center">
            <Col lg="6" className="p-5 rounded login-wrap">
                <Form onSubmit={(e) => handleSubmitForm(e)}>
                    <Form.Group className="mb-5" controlId="formBasicName">
                        <Form.Label>Name*</Form.Label>
                        <Form.Control
                            className={logError && "error"} 
                            type="text" 
                            placeholder={logError ? "Please enter Name!" : "Enter name"}
                            autoFocus
                            maxLength="10"
                            onChange={(e) => handleChangeUserName(e)} 
                        />
                        { logError &&
                            <Form.Text className="text-error">
                            Name field is mandatory!
                            </Form.Text>
                        }
                    </Form.Group>

                    
                    <div className='login-img-wrapper mb-5'>
                        <div>
                            <Form.Label className='mb-0'>Chose avatar:</Form.Label>
                            <br />
                            <Form.Text className="text-muted">
                            Default is Batman
                            </Form.Text>
                        </div>
                        <div className='login-icons'>
                            <Image src={batman} className={selectedImage === 1 ? "active login-img" : "login-img"} onClick={(e) => handleChoseAvatar(e)}/>
                            <Image src={ninja} className={selectedImage === 2 ? "active login-img" : "login-img"} onClick={(e) => handleChoseAvatar(e)}/>
                            <Image src={warrior} className={selectedImage === 3 ? "active login-img" : "login-img"} onClick={(e) => handleChoseAvatar(e)}/>
                            <Image src={male} className={selectedImage === 4 ? "active login-img" : "login-img"} onClick={(e) => handleChoseAvatar(e)}/>
                        </div>
                    </div>

                    <Button 
                        variant="primary" 
                        type="submit" 
                        className='login-submit-btn'
                    >
                        Enter chat
                    </Button>
                </Form>
            </Col>
        </Row>
    </Container>
  )
}

export default Login