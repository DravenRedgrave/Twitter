import React,{ useState,useEffect } from 'react';
import './Feed.css'
import Post from './Post';
import TweetBox from './TweetBox';
import db from './Firebase';
import FlipMove from 'react-flip-move';

function Feed() {
    const [posts,setPost] = useState([]);

    useEffect(()=>{
        db.collection('posts').onSnapshot(snapshot => (
            setPost(snapshot.docs.map(doc => doc.data()))
        ))
    },[])
    return (
        <div className="Feed">
            <div className="feed-header">
                <h2>Home</h2>
            </div>
            <TweetBox/>
            <FlipMove>
              {posts.map(post => (
                 <Post key={post.text} displayName={post.displayName} username={post.username} verified={true} text={post.text} avatar={post.avatar} image={post.image} />
               ))}
            </FlipMove>
        </div>
    )
}

export default Feed
