import React from 'react'
import { Image } from 'react-bootstrap';

const Member = ({member, i}) => {
  return (
    <div className='member-cont'>
        {i+1}.
        <Image src={member.clientData.avatar} alt="member" className='member-img' />
        <p className='member-text'>{member.clientData.username}</p>
    </div>
  )
}

export default Member