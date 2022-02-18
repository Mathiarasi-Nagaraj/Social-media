import React from 'react'
import './rightbar.css'
import {Users} from '../../dummyData'
import Online from '../online/Online'
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
        {
          Users.map(u=>(
            <Online key={u.id} user={u}></Online>
          ))
        }


       
      </div>
    </div>
  )
}
