import React, { useState } from 'react'
import './Post.css'
import {Users} from '../../dummyData'
export default function Post({post}) {
const[like,setLike]=useState(post.like);
const[isliked,setisliked]=useState(false);
const handellike=()=>
{
    setLike(isliked?like-1:like+1)
    setisliked(!isliked);
}
  return (
    <div className='post'>
        <div className="postwrapper">
            <div className="postleft">
                <div className="postleft-left">
                    <img src={Users.filter((f)=>f.id===post?.userId)[0].profilePicture} alt="user" className='postprofile'></img>
                    <span className='postusername'>{Users.filter((f)=>f.id===post?.userId)[0].username}</span>
                    <span className='posttime'>{post.date}</span>
                </div>
                <div className="post-left-right">
                <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
            </div>
            <div className="postcenter">
                <span className='posttext'>{post?.desc}</span>
                <img src={post.photo} alt="post" className='postimg'></img>
            </div>
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
