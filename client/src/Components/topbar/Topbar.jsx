import React from 'react'
import './topbar.css'
import {Link} from 'react-router-dom'
export default function Topbar() {
  const PF=process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="topbar">
      <div className="topbar-left">
        <Link to="/" style={{textDecoration: "none"}}>
        <span className='topbarlogo' >SnapTalks</span>
        </Link>
      </div>
      <div className="topbar-center">
        <div className='searchbar'>
        <i class="fa-solid fa-magnifying-glass searchicon"></i>
        <input placeholder='Search posts' type="text" className='searchinput'></input>
        </div>
      </div>
      
      <div className="topbar-right">
        <div className='topbarlinks'>
          <div className="topbarlinkitem">Home</div>
          <div className="topbarlinkitem">TimeLine</div>
        </div>
        <div className='topbarIcons'>
          <div className="topbarIconItem">
            <i class="fa-solid fa-user-large"></i>
            <span className='topbarIconbadges'>1</span>
          </div>
          <div className="topbarIconItem">
          <i class="fa-solid fa-message"></i>
            <span className='topbarIconbadges'>2</span>
          </div>
          <div className="topbarIconItem">
            <i class="fa-solid fa-bell"></i>
            <span className='topbarIconbadges'>3</span>
          </div>
        </div>
        <img src={`${PF}person/1.jpeg`} className='topbarImg' alt="person"></img>
      </div>
    </div>
  )
}
