import React, { useRef, useEffect } from 'react'
import { Image } from 'react-bootstrap'

const Message = ({message, messages, user}) => {

  const bottomRef = useRef()

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, [messages])

  return (
    <div className={user.username === message.user.username ? "message my-message" : "message other-message"} ref={bottomRef}>
      <p className={user.username === message.user.username ? "my-username" : "other-username"}>{message.user.username}</p>
      <span className={user.username === message.user.username ? "message-wrapper" : "message-wrapper other-message-wrapper"}>
  
          <Image src={message.user.avatar} className={user.username === message.user.username ? "message-img my-message-img" : "message-img"} />
       
        <p className={user.username === message.user.username ? "message-text my-message-text" : "message-text"}>{message.message}</p>
      </span>
    </div>
  )
}

export default Message