import React from 'react'
import Message from './Message/Message'

const Messages = ({messages, user}) => {
  return (
    <div className='messages-container'>
        {
            messages.map((message, i) => {
                return (
                    <Message key={i} message={message} messages={messages} user={user} />
                )
            })
        }
    </div>
  )
}

export default Messages