import React from 'react'
import YoutubeVideo from './YoutubeVideo'
import faceDetection from '../../../public/images/thumbnail/face_detection.jpg'
import iot from '../../../public/images/thumbnail/iot.jpg'
import mBot from '../../../public/images/thumbnail/mbot.jpg'
import voiceRec from '../../../public/images/thumbnail/voice_rec.jpg'

export default function SchoolProject() {
  return (
    <div className='mt-5 pt-5'>
        <div className='text-center my-3 pb-3'>
            <span className='text-2'>School Projects</span>
        </div>
        <div className='row gy-5'>
            <YoutubeVideo url="https://www.youtube.com/embed/Ki4RgO5zAJw?rel=0&autoplay=1"
                coverImg={faceDetection} title="Face detection game with Tensorflow.js"/>
            <YoutubeVideo url="https://www.youtube.com/embed/CIGVztbXEic?rel=0&autoplay=1"
                coverImg={voiceRec} title="Control Arduino with voice recognition using C# programming"/>
            <YoutubeVideo url="https://www.youtube.com/embed/GVLbO-XuglU?rel=0&autoplay=1"
                coverImg={iot} title="Internet of things with NodeMCU ESP8266 & PHP Server"/>
            <YoutubeVideo url="https://www.youtube.com/embed/BlnrbDlhXpA?rel=0&autoplay=1"
                coverImg={mBot} title="mBot object avoiding & line following with Scratch Programming"/>
        </div>
    </div>
  )
}

