import React from 'react'
import './Userfriend.css'
export default function UserFriend({ user }) {
    return (

            <div className="rightbarfollowing">
                <img src={user.profilePicture} className='rightbarfollowingimg'></img>
                <span className='rightbarfollowingname'>{user.username}</span>
            </div>
        

    )
}
