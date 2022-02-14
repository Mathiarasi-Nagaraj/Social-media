import React from 'react'
import './Home.css';
import Feed from '../../Components/feed/Feed'
import Leftbar from '../../Components/leftbar/Leftbar'
import Topbar from '../../Components/topbar/Topbar'
import Rightbar from '../../Components/rightbar/Rightbar'
export default function Home() {
  return (
    <div>
        <Topbar></Topbar>
        <div className='homecontainer'>
          <Leftbar></Leftbar>
           <Feed></Feed>
           <Rightbar></Rightbar>
        </div>
    </div>
  )
}
