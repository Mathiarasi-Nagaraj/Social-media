import React from 'react'
import './Userfriend.css'
export default function UserFriend({ user }) {
    const PF=process.env.REACT_APP_PUBLIC_FOLDER;
    return (

            <div className="rightbarfollowing">
                <img src={PF+user.profilePicture} className='rightbarfollowingimg'></img>
                <span className='rightbarfollowingname'>{user.username}</span>
            </div>
        

    )
}
