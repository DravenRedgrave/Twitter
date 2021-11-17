import React, { useState } from 'react';
import './TweetBox.css';
import { Avatar,Button } from '@mui/material';
import db from './Firebase';
function TweetBox() {

    const [tweetMessage,setTweetMessage] = useState("");
    const [tweetImg,setTweetImg] = useState("");

    const  sentTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'Bella',
            username:'MissBella',
            verified:true,
            text:tweetMessage,
            image:tweetImg,
            avatar: "https://i.redd.it/p4idb5jhw6f71.jpg"
        });

        setTweetMessage("");
        setTweetImg("");
    }
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox-input">
                    <Avatar src="https://pbs.twimg.com/profile_images/1356529461924085761/xbnlFcTT_400x400.jpg"/>
                    <input onChange={e => setTweetMessage(e.target.value)} value={tweetMessage} placeholder="Tweet me" type="text"/>
                </div>
                <input  onChange={e => setTweetImg(e.target.value)} value={tweetImg} className="tweetbox-imginput"  placeholder="Enter image URL" type="text"/>
                <Button onClick={sentTweet} type="submit" className="tweetbox-tweetbutton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
