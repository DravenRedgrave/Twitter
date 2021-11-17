import React from 'react';
import './SidebarOptions.css'

function SibebarOptions({text,Icon,active}) {
    return (
        <div className={`sidebarOptions ${active && 'sidebarOptions_active'}`}>
            <Icon/>
            <p>{text}</p>
        </div>
    )
}

export default SibebarOptions
