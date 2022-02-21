import React from 'react'
import './online.css'
export default function Online({user}) {
  const PF=process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <ul className="onlinefriendlist">
    <li className="onlinefriendlistitem">
      <img src={PF+user.profilePicture} alt="onlinefriend" className='onlinefriendimg'></img>
      <span className="online"></span>
      <span className='onlinefriendname'>{user.username}</span>
    </li>
  
  </ul>
  )
}
