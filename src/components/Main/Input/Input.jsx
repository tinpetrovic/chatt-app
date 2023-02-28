import React from 'react'
import { Form, InputGroup, Button } from 'react-bootstrap'

const Input = () => {
  return (
    <>
        <InputGroup>
            <Form.Control
            className="msg-input p-2"
            placeholder="Message..."
            aria-label="message"
            aria-describedby="message text"
            />

            <Button className='msg-btn' variant="primary" id="button-addon2" >
            Button
            </Button>
      </InputGroup>
    </>
  )
}

export default Input