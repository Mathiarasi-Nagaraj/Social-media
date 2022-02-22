import React, { useState,useEffect } from 'react'
import './Post.css'
import {format} from 'timeago.js';
import axios from "axios";
import {Link} from "react-router-dom";
export default function Post({post}) {
const[like,setLike]=useState(post.likes.length);
const[isliked,setisliked]=useState(false);
const[user,setuser]=useState({});
const PF=process.env.REACT_APP_PUBLIC_FOLDER;
const handellike=()=>
{
    setLike(isliked?like-1:like+1)
    setisliked(!isliked);
}

useEffect(() => {
    console.log(post.userId);
    const fetchuser = async () => {
      const res = await axios.get(`/user?userId=${post.userId}`);
  
      setuser(res.data);

    }
    fetchuser();
  }, [post.userId]);

  return (
    <div className='post'>
        <div className="postwrapper">
            <div className="postleft">
                <div className="postleft-left">
                    <Link to={`profile/${post.username}`}>
                    <img src={user?.profilePicture || PF+"person/noAvatar.png"} alt="user" className='postprofile'></img>
                    </Link>
                    <span className='postusername'>{post.username}</span>
                    <span className='posttime'>{format(post.createdAt)}</span>
                </div>
                <div className="post-left-right">
                <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
            </div>
            <div className="postcenter">
                <span className='posttext'>{post?.desc}</span>
                <img src={PF+post.img} alt="post" className='postimg'></img>
   
            </div>
         {  console.log( PF+post.img)}
            <div className="postright">
                <div className="postright-left">
            <img src="/assets/like.png" alt="post" className='postlike' onClick={handellike}></img>
            <img src="/assets/heart.png" alt="post" className='postlike' onClick={handellike}></img>
            <span className='postliketext'>{like} people liked your post</span>
            </div>
            <div className="postright-right">
                <span className='comments'>{post.comment} comments</span>
            </div>
            </div>
        </div>
    </div>
  )
}
