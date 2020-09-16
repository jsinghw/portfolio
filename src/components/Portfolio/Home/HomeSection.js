import React from "react";

import { Link as LinkScroll } from "react-scroll";
import waveTop from 'assets/img/wave/wave-top.png'
import waveMid from 'assets/img/wave/wave-mid.png'
import waveBot from 'assets/img/wave/wave-bot.png'

export default function HomeSection() {

  return (
      <header id='home'>
          <div className="waveWrapper waveAnimation">
            <div className="waveWrapperInner bgTop">
              <div className="wave waveTop" style={{backgroundImage: `url(${waveTop})`}}></div>
            </div>
            <div className="waveWrapperInner bgMiddle">
              <div className="wave waveMiddle" style= {{backgroundImage: `url(${waveMid})`}}></div>
            </div>
            <div className="waveWrapperInner bgBottom">
              <div className="wave waveBottom" style= {{backgroundImage: `url(${waveBot})`}}></div>
            </div>
          </div>
          <div className='home-text noselect'>
              Hello, I'm
              <span className='highlight'> Jaspal Singh</span>.
                  <br/>
                  I'm a Full Stack Engineer.
                  <br/>
                  <LinkScroll to='nav'
                      spy={true}
                      smooth={true}
                      duration={350}>
                      <button className='home-button' type="button">
                          View My Work
                          <span>&nbsp;&nbsp;&nbsp;</span>
                          <img className='home-icon'
                              src={'./images/chevron-white.png'}
                              alt='arrow'>
                          </img>
                      </button>
                  </LinkScroll>
              </div>
      </header>
    );
}
