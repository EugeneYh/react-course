import React from 'react';

function Sidebar() {
    return (
        <nav className='side-bar'>
            <div><a href="#">Profile</a></div>
            <div><a href="#">Messages</a></div>
            <div><a href="#">News</a></div>
            <div><a href="#">Music</a></div>
            <div><a href="#">Settings</a></div>
        </nav>
    );
}

export default Sidebar;