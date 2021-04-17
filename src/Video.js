import React, { useRef, useState } from 'react';
import VideoFooter from './VideoFooter';
import "./Video.css";
import VideoSidebar from './VideoSidebar';

function Video({ url, channel, description, song, likes, messages, shares }) {
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);

    const handleVideoClick = () => {
        if(playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    }

    return (
        <div className="video">
            <video
                type="video/mp4"
                onClick={handleVideoClick}
                ref={videoRef}
                className="video__player"
                loop
                src={url}
            ></video>

            <VideoFooter 
                channel={channel}
                description={description}
                song={song}
            />
            <VideoSidebar likes={likes} shares={shares} messages={messages}/>
        </div>
        );
}

export default Video;