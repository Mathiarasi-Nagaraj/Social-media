import React from 'react'
import './rightbar.css'
export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarwrapper">
        <div className="birthdaycontainer">

          <img src="/assets/gift.png" className="birthdayImg" alt="birthday"></img>

          <span className="birthdaytext"><b>Krithika</b> and <b>5 others friends</b> are celebrating thier birthday today </span>

        </div>

        <img alt="ad" src="/assets/ad.png" className='rightbarad'></img>
        
          <h4 className="onlinefriend">Online friend</h4>
          <ul className="onlinefriendlist">
            <li className="onlinefriendlistitem">
              <img src="/assets/person/4.jpeg" alt="onlinefriend" className='onlinefriendimg'></img>
              <span className="online"></span>
              <span className='onlinefriendname'>Monisha</span>
            </li>
            <li className="onlinefriendlistitem">
              <img src="/assets/person/4.jpeg" alt="onlinefriend" className='onlinefriendimg'></img>
              <span className="online"></span>
              <span className='onlinefriendname'>Monisha</span>
            </li> <li className="onlinefriendlistitem">
              <img src="/assets/person/4.jpeg" alt="onlinefriend" className='onlinefriendimg'></img>
              <span className="online"></span>
              <span className='onlinefriendname'>Monisha</span>
            </li> <li className="onlinefriendlistitem">
              <img src="/assets/person/4.jpeg" alt="onlinefriend" className='onlinefriendimg'></img>
              <span className="online"></span>
              <span className='onlinefriendname'>Monisha</span>
            </li> <li className="onlinefriendlistitem">
              <img src="/assets/person/4.jpeg" alt="onlinefriend" className='onlinefriendimg'></img>
              <span className="online"></span>
              <span className='onlinefriendname'>Monisha</span>
            </li> <li className="onlinefriendlistitem">
              <img src="/assets/person/4.jpeg" alt="onlinefriend" className='onlinefriendimg'></img>
              <span className="online"></span>
              <span className='onlinefriendname'>Monisha</span>
            </li> <li className="onlinefriendlistitem">
              <img src="/assets/person/4.jpeg" alt="onlinefriend" className='onlinefriendimg'></img>
              <span className="online"></span>
              <span className='onlinefriendname'>Monisha</span>
            </li>
          </ul>


       
      </div>
    </div>
  )
}
