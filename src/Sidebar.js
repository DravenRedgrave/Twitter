import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import SibebarOptions from './SibebarOptions';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import { Button } from '@mui/material';

function Sidebar() {
    return (
        <div className="sidebar">
            <TwitterIcon className="sidebar-twitterIcon"/>
            <SibebarOptions Icon={HomeOutlinedIcon} text="Home"/>
            <SibebarOptions Icon={SearchOutlinedIcon} text="Explore"/>
            <SibebarOptions Icon={NotificationsOutlinedIcon} text="Notification"/>
            <SibebarOptions Icon={ChatBubbleOutlineOutlinedIcon} text="Message"/>
            <SibebarOptions Icon={BookmarksOutlinedIcon} text="Bookmarks"/>
            <SibebarOptions Icon={ListOutlinedIcon} text="List"/>
            <SibebarOptions Icon={PermContactCalendarIcon} text="Profile"/>
            <SibebarOptions Icon={MoreHorizOutlinedIcon} text="More"/>
            <Button variant="outlined" className="sidebar-tweet" fullWidth>Tweet</Button>
        </div>
    )
}

export default Sidebar
