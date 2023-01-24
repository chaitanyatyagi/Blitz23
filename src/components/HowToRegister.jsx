import React from "react"
import ReactPlayer from 'react-player'
import "../style/howtoregister.css"

export default function HowToRegister() {

    return (
        <div className="howtoregister">
            <div className="how2regins how2reginsmar">
                <div className="how2reginshead">How to create an account in the website?</div>
                <ReactPlayer url='https://video.blitzschlag.co.in/video/id_video_6/_manifest.mpd' width="70%" height="100%" playing controls className="video-div" />
            </div>
            <div className="how2regins">
                <div className="how2reginshead">How to register in an event (for MNIT Jaipur & IIIT Kota students)?</div>
                <ReactPlayer url='https://video.blitzschlag.co.in/video/id_video_4/_manifest.mpd' width="70%" height="100%" playing controls className="video-div" />
            </div>
            <div className="how2regins">
                <div className="how2reginshead">How to register in an event (for NON MNIT Jaipur & NON IIIT Kota students in DESKTOP)?</div>
                <ReactPlayer url='https://video.blitzschlag.co.in/video/id_video_2/_manifest.mpd' width="70%" height="100%" playing controls className="video-div" />
            </div>
            <div className="how2regins">
                <div className="how2reginshead">How to register in an event (for NON MNIT Jaipur & NON IIIT Kota students in ANDROID)?</div>
                <ReactPlayer url='https://video.blitzschlag.co.in/video/id_video_3/_manifest.mpd' width="70%" height="100%" playing controls className="video-div" />
            </div>
            {/* <ReactPlayer url='http://159.223.90.95:5000/video/id_video_6/_manifest.mpd' controls /> */}
        </div>
    )

}