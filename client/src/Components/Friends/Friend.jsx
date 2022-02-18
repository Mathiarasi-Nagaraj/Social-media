import React from 'react'
import './Friend.css'
export default function Friend({user}) {
  return (
    <ul className="leftbarfriendlist">
    <li className="leftbarfriendlistitems">
        <img className='leftbarfriendimg' src={user.profilePicture}></img>
        <span className='leftbarfriendname'>{user.username}</span>
    </li>

</ul>
  )
}
