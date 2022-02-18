
import React from 'react'
import './share.css'
export default function Share() {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="sharetop">
                <img src="/assets/person/1.jpeg" className='shareprofile'></img>
                <input type="text" placeholder="Share with us..." className='shareInput'></input>
            </div>
            <hr className='ShareHr'></hr>
<div className="sharebottom">
    <div className="shareOptions">
        <div className="shareOption">
        <i class="fa-solid fa-photo-film shareOptionIcon" style={{color:"tomato"}}></i>
            <span className='shareOptionText'>Photo or Video</span>
        </div>
        <div className="shareOption">
        <i class="fa-solid fa-tag shareOptionIcon" style={{color:"mediumblue"}}></i>
            <span className='shareOptionText'>Tag</span>
        </div>
        <div className="shareOption">
        <i class="fa-solid fa-location-dot shareOptionIcon" style={{color:"green"}}></i>
            <span className='shareOptionText' >Location</span>
        </div>
        <div className="shareOption">
        <i class="fa-solid fa-face-grin-wide shareOptionIcon" style={{color:"gold"}}></i>
            <span className='shareOptionText' >Feelings</span>
        </div>
    </div>
    <div>
    <button className='btn'>Share</button>
    </div>
</div>
        </div>
    </div>
  )
}
