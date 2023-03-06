import React, { useState, useRef } from 'react'
import { Form, InputGroup, Button } from 'react-bootstrap'

const Input = ({publishMessage}) => {

  const [message, setMessage] = useState("")
  const inputRef = useRef()

  const handleSendMessage = (e) => {
    e.preventDefault()
    if(message !== "") {
      publishMessage(message)
    }
    inputRef.current.value = ""
  }

  const handleEnter = (e) => {
    if(e.key === "Enter") {
      if(message !== "") {
        publishMessage(message)
      }
      inputRef.current.value = ""
  }
}

  return (
    <>
        <InputGroup onSubmit={(e) => handleSendMessage(e)}>
            <Form.Control
            className="msg-input p-2"
            autoFocus
            ref={inputRef}
            placeholder="Message..."
            aria-label="message"
            aria-describedby="message text"
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => handleEnter(e)}
            />

            <Button className='msg-btn' variant="primary" id="button-addon2" onClick={(e) => handleSendMessage(e)}>
            Button
            </Button>
      </InputGroup>
    </>
  )
}

export default Input