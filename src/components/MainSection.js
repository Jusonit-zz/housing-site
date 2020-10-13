import React from 'react';
import '../App.css';
import { Button } from './Button';
import './MainSection.css';

function MainSection() {
    return (
        <div className="main-container">
            <video src="/video/video-2.mp4" autoPlay loop muted />
            <h1>New Home Awaits</h1>
            <p>Get one today.</p>
            <div className="main-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'> 
                    Get Started!
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'> 
                    View Virtual House Tours! <i className='far fa-play-circle'/>
                </Button>
            </div>
        </div>
    )
}

export default MainSection
