import React, { useRef, useEffect } from 'react'
import { Image } from 'react-bootstrap'

const Message = ({message, messages, user}) => {
  console.log(message);
  console.log(user);

  const bottomRef = useRef()

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, [messages])

  return (
    <div className={user.id === message.user.id ? "message my-message" : "message other-message"} ref={bottomRef}>
      <p className={user.id === message.user.id ? "my-username" : "other-username"}>{message.user.username}</p>
      <span className={user.id === message.user.id ? "message-wrapper" : "message-wrapper other-message-wrapper"}>
  
          <Image src={message.user.avatar} className={user.id === message.user.id ? "message-img my-message-img" : "message-img"} />
       
        <p className={user.id === message.user.id ? "message-text my-message-text" : "message-text"}>{message.message}</p>
      </span>
    </div>
  )
}

export default Message