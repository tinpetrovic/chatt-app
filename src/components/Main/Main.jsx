import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { Container, Row, Col } from 'react-bootstrap'
import Input from './Input/Input';


const Main = () => {

    const { user } = useContext(UserContext)
    console.log(user);

  return (
    <Container className='main-cont'>
        <Row className="justify-content-center align-itmes-center">
            <Col lg="8" className="p-5 rounded main-wrap">
                <div className='screen rounded'>
                    screen
                    <Input />
                </div>
                
            </Col>
        </Row>
    </Container>
  )
}

export default Main