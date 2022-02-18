import React from 'react'
import './Post.css'
export default function Post() {
  return (
    <div className='post'>
        <div className="postwrapper">
            <div className="postleft">
                <div className="postleft-left">
                    <img src="/assets/person/1.jpeg" alt="user" className='postprofile'></img>
                    <span className='postusername'>Mathi</span>
                    <span className='posttime'>5 mins ago</span>
                </div>
                <div className="post-left-right">
                <i class="fa-light fa-ellipsis-vertical"></i>
                </div>
            </div>
            <div className="postcenter">
                <span className='posttext'>Hey It is my first post</span>
                <img src="/assets/post/1.jpeg" alt="post" className='postimg'></img>
            </div>
            <div className="postright">
                <div className="postright-left">
            <img src="/assets/like.png" alt="post" className='postlike'></img>
            <img src="/assets/heart.png" alt="post" className='postlike'></img>
            <span className='postliketext'>13 people liked your post</span>
            </div>
            <div className="postright-right">
                <span className='comments'>20 comments</span>
            </div>
            </div>
        </div>
    </div>
  )
}
