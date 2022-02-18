import React from 'react'
import './rightbar.css'
import {Users} from '../../dummyData'
import Online from '../online/Online'
import UserFriend from '../UserFriend/UserFriend'
export default function Rightbar({profile}) {
  const HomeRightbar=()=>
  {
       return( 
         <>
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
 
 </>
        
       )
  }
  const Profilerightbar=()=>
  {
    return(
      <div>
        <>
        <h4 className="rightbartitle">
          User Information
        </h4>
        <div className="rightbarinfo">
          <div className="rightbarinfoitem">
            <span className="rightbarinfokey">City :</span>
            <span className="rightbarinfovalue">Tirupur</span>
          </div>
          <div className="rightbarinfoitem">
            <span className="rightbarinfokey">From :</span>
            <span className="rightbarinfovalue">Tirupur</span>
          </div>
          <div className="rightbarinfoitem">
            <span className="rightbarinfokey">Relationship :</span>
            <span className="rightbarinfovalue">Single</span>
          </div>
          <div className="rightbarinfoitem">
            <div className="rightbarinfokey"></div>
            <div className="rightbarinfovalue"></div>
          </div>
        </div>
        <h4 className="rightbartitle">User Friends</h4>
        
        <div className="rightbarFollowings">
        {
           Users.map(u=>(
             <UserFriend key={u.id} user={u}></UserFriend>
           ))
         }
         </div>
        </>
      </div>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarwrapper">
      {profile?<Profilerightbar></Profilerightbar>:<HomeRightbar></HomeRightbar>}
      </div>
    </div>
  )
}
