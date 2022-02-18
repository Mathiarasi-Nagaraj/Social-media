import React from 'react'
import './online.css'
export default function Online({user}) {
    console.log(user);
  return (
    <ul className="onlinefriendlist">
    <li className="onlinefriendlistitem">
      <img src={user.profilePicture} alt="onlinefriend" className='onlinefriendimg'></img>
      <span className="online"></span>
      <span className='onlinefriendname'>{user.username}</span>
    </li>
  
  </ul>
  )
}
