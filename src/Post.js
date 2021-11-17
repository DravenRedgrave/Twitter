import React,{forwardRef} from 'react';
import './Post.css'
import { Avatar } from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PublishIcon from '@mui/icons-material/Publish';

const Post = forwardRef(({displayName,username,verified,timestamp,text,image,avatar},ref) => {
    return (
        <div className="post" ref={ref}>
            <div className="post-avatar">
                <Avatar src={avatar}/>
            </div>
            <div className="post-body">
                <div className="post-header">
                    <div className="post-headerText">
                        <h3>
                            {displayName}{""} <span>
                                { verified && <VerifiedUserIcon className="post-bage"/>}
                                <span className="post-headerSpecial">@{username}</span>
                            </span>
                        </h3>
                    </div>
                    <div className="post-headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image} alt=""/>
                <div className="post-footer">
                    <ChatBubbleIcon fontSize="small"/>
                    <RepeatIcon fontSize="small"/>
                    <FavoriteIcon fontSize="small"/>
                    <PublishIcon fontSize="small"/>
                </div>
            </div>
        </div>
    )
});

export default Post
