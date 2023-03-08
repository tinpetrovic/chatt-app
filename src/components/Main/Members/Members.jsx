import React from 'react'
import Member from './Member/Member'

const Members = ({members}) => {
  return (
    <div className='members-cont'>
        <p>Members: {members.length > 0 && <span className="members-count">{members.length}</span>}</p>
        {
            members.map((member, i) => {
                return (
                    <Member key={i} i={i} member={member}/>
                )
            })
        }
    </div>
  )
}

export default Members