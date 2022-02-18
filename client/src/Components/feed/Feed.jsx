import React from 'react'
import Post from '../Post/Post'
import Share from '../share/Share'
import './feed.css'
export default function Feed() {
  return (
    <div className='Feed'>
      <div className="feedWrapper">
        <Share></Share>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post><Post></Post>
      </div>
    </div>
  )
}
