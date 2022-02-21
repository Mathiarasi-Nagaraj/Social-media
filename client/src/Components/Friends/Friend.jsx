import React from 'react'
import './Friend.css'
export default function Friend({user}) {
  const PF=process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <ul className="leftbarfriendlist">
    <li className="leftbarfriendlistitems">
        <img className='leftbarfriendimg' src={PF+user.profilePicture}></img>
        <span className='leftbarfriendname'>{user.username}</span>
    </li>

</ul>
  )
}
