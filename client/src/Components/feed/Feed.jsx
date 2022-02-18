import React from 'react'
import Post from '../Post/Post'
import Share from '../share/Share'
import './feed.css'
import { Posts } from '../../dummyData'

export default function Feed() {
  console.log(Posts);
  return (
    <div className='Feed'>
      <div className="feedWrapper">
        <Share></Share>
        {Posts.map(p => (
          <Post post={p}></Post>
        ))}

      </div>
    </div>
  )
}
