import React, { useState } from 'react'
import { Form, InputGroup, Button } from 'react-bootstrap'

const Input = ({publishMessage}) => {

  const [message, setMessage] = useState("")

  const handleSendMessage = (e) => {
    e.preventDefault()
    if(message !== "") {
      publishMessage(message)
    }
  }

  return (
    <>
        <InputGroup onSubmit={(e) => handleSendMessage(e)}>
            <Form.Control
            className="msg-input p-2"
            placeholder="Message..."
            aria-label="message"
            aria-describedby="message text"
            onChange={(e) => setMessage(e.target.value)}
            />

            <Button className='msg-btn' variant="primary" id="button-addon2">
            Button
            </Button>
      </InputGroup>
    </>
  )
}

export default Input