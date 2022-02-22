
import React, { useEffect, useState } from 'react'
import Feed from '../../Components/feed/Feed'
import Leftbar from '../../Components/leftbar/Leftbar'
import Topbar from '../../Components/topbar/Topbar'
import Rightbar from '../../Components/rightbar/Rightbar'
import './Profile.css';
import axios from "axios";
import { useParams } from 'react-router-dom'
export default function Profile() {
const username=useParams().username;

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setuser] = useState({})
    useEffect(() => {
        console.log("hai");
        const fetchuser = async () => {
            const res = await axios.get(`/user?username=${username}`);
            setuser(res.data);
            console.log(res.data);
        }
        fetchuser();
    }, [username]);
    return (
        <>
            <Topbar></Topbar>
            <div className='profile'>


                <Leftbar></Leftbar>
                <div className="profileright">
                    <div className="profilerighttop">
                        <div className="profilecover">
                            <img
                                className="profilecoverimg"
                                src={
                                    user.coverPicture
                                        ? PF + user.coverPicture
                                        : PF + "person/noCoverImg.png"
                                }
                                alt=""
                            />
                            <img
                                className="profileuserimg"
                                src={
                                    user.profilePicture
                                        ? PF + user.profilePicture
                                        : PF + "person/noAvatar.png"
                                }
                                alt=""
                            /></div>
                        <div className="profileinfo">
                            <h4 className='profileinfoname'>{user.username}</h4>
                            <span className='profileinfodesc'>{user.desc}</span>
                        </div>
                    </div>
                    <div className="profilerightbottom">
                        <Feed username="user1"></Feed>
                        <Rightbar user={user}></Rightbar>
                    </div>
                </div>
            </div>
        </>
    )
}
