import React from 'react'
import './leftbar.css'
import {Users} from '../../dummyData'
import Friend from '../Friends/Friend'
export default function Leftbar() {
  return (
    <div className='leftbar'>
<div className="leftwrapper">
    <ul className="leftbarlist">
        <li className="leftbarlistitmes">
        <i class="fa-solid fa-database leftbarlistitemsicons"></i>
            <span className="leftbarlistitemstext">Feed</span>
        </li>
        <li className="leftbarlistitmes">
            <i class="fa-solid fa-comments leftbarlistitemsicons"></i>
            <span className="leftbarlistitemstext">Chats</span>
        </li>
        <li className="leftbarlistitmes">
        <i class="fa-solid fa-video leftbarlistitemsicons"></i>
            <span className="leftbarlistitemstext">Videos</span>
        </li>
        <li className="leftbarlistitmes">
        <i class="fa-solid fa-user-group leftbarlistitemsicons"></i>
            <span className="leftbarlistitemstext">Groups</span>
        </li>
        <li className="leftbarlistitmes">
        <i class="fa-solid fa-bookmark leftbarlistitemsicons"></i>
            <span className="leftbarlistitemstext">Bookmarks</span>
        </li>
        <li className="leftbarlistitmes">
        <i class="fa-solid fa-circle-question leftbarlistitemsicons"></i>
            <span className="leftbarlistitemstext">Questions</span>
        </li> 
         <li className="leftbarlistitmes">
         <i class="fa-solid fa-suitcase leftbarlistitemsicons"></i>
            <span className="leftbarlistitemstext">Jobs</span>
        </li>
        <li className="leftbarlistitmes">
        <i class="fa-solid fa-calendar leftbarlistitemsicons"></i>
            <span className="leftbarlistitemstext">Events</span>
        </li>
        <li className="leftbarlistitmes">
        <i class="fa-solid fa-graduation-cap leftbarlistitemsicons"></i>
            <span className="leftbarlistitemstext">Courses</span>
        </li>
    </ul>
    <button className='leftbarbutton'>See More</button>
    <hr className='leftbarhr'></hr>
   {Users.map(u=>(
       <Friend key={u.id} user={u}></Friend>
   ))}
</div>


    </div>

  )
}
