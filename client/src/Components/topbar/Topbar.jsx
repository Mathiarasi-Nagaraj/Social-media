import React from 'react'
import './topbar.css'
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <span className='topbarlogo'>SnapTalks</span>
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
        <img src="/assets/person/1.jpeg" className='topbarImg'></img>
      </div>
    </div>
  )
}
