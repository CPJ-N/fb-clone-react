import { Avatar } from '@material-ui/core'
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ChatBubbleOutlinedIcon from '@material-ui/icons/ChatBubbleOutline'
import NearMeIcon from '@material-ui/icons/NearMe'
import AccountCircleIclon from '@material-ui/icons/AccountCircle'
import React from 'react'
import './Post.css'

const Post = ({profilePic, imgName, username, timestamp, message }) => {
    return (
        <div className='post'>
            <div className='post__top'>
                <Avatar src={profilePic} className='post__avatar'/>
                <div className='post__topInfo'>
                    <h3>{username}</h3>
                    <p>{new Date(parseInt(timestamp)).toUTCString()}</p>
                    
                </div>
            </div>

            <div className="post__bottom">
                <p>{message}</p>
            </div>

            <div className="post__options">
                        <div className="post__option">
                            <ThumbUpIcon />
                            <p>Like</p>
                        </div>
                        <div className="post__option">
                            <ChatBubbleOutlinedIcon />
                            <p>Comment</p>
                        </div>
                        <div className="post__option">
                            <NearMeIcon />
                            <p>Share</p>
                        </div>
                        <div className="post__option">
                            <AccountCircleIclon />
                            <ExpandMoreOutlined />
                        </div>
            </div>
        </div>
    )
}

export default Post
