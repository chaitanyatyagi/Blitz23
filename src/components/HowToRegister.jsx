import React from "react"
import ReactPlayer from 'react-player'
import "../style/howtoregister.css"

export default function HowToRegister() {


        

    return (
        <div className="howtoregister">
            <ReactPlayer url='https://video.blitzschlag.co.in/video/id_video_2/_manifest.mpd' playing controls />
            <ReactPlayer url='http://159.223.90.95:5000/video/id_video_6/_manifest.mpd' controls />
        </div>
    )

}