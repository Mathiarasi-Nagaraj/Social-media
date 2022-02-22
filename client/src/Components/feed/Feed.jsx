import React, { useEffect, useState } from 'react'
import Post from '../Post/Post'
import Share from '../share/Share'
import './feed.css'
import axios from "axios";

export default function Feed({username}) {
  const [post, setpost] = useState([]);
console.log(username)
  useEffect(() => {
    const fetchpost = async () => {
      const res = username? await axios.get('/post/profile/'+username):await axios.get("post/timeline/62136f324b5ac2646dbe8f4d");
    
      setpost(res.data);
console.log(res.data);
    }
    fetchpost();
  }, []);

return (
  <div className='Feed'>
    <div className="feedWrapper">
      <Share></Share>
      {post.map(p => (
          <Post key={p._id} post={p}></Post>
        ))}

    </div>
  </div>
)
}
