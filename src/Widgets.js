import React from 'react';
import './Widgets.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import TweetEmbed from 'react-tweet-embed';
function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets-input">
                <SearchOutlinedIcon className="serachIcon"/>
                <input placeholder="Seatch Twitter" type="text"/>
            </div>
            <div className="widgets-widgetsContainer">
                <h2>Summer</h2>
                <TweetEmbed id="1459280613819572225" />
                <a className="twitter-timeline"
                    href="https://twitter.com/arcaneshow"
                    data-chrome="noscrollbar"
                    data-height="400"
                >
                </a>
            </div>
        </div>
    )
}

export default Widgets
