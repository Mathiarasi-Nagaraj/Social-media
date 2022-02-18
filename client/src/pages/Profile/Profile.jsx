import React from 'react'
import Feed from '../../Components/feed/Feed'
import Leftbar from '../../Components/leftbar/Leftbar'
import Topbar from '../../Components/topbar/Topbar'
import Rightbar from '../../Components/rightbar/Rightbar'
import './Profile.css';
export default function Profile() {
    return (
        <>
            <Topbar></Topbar>
            <div className='profile'>

            
                    <Leftbar></Leftbar>
                    <div className="profileright">
                        <div className="profilerighttop">
                            <div className="profilecover">
                            <img src="/assets/post/3.jpeg" className='profilecoverimg'></img>
                            <img src="/assets/person/3.jpeg" className='profileuserimg'></img></div>
                            <div className="profileinfo">
                                <h4 className='profileinfoname'>Mathiarasi</h4>
                                <span className='profileinfodesc'>Hey all,just share some positivity</span>
                            </div>
                        </div>
                        <div className="profilerightbottom">
                        <Feed></Feed>
                        <Rightbar profile></Rightbar>
                        </div>
                    </div>
                </div>
        </>
    )
}
