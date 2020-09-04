import React from "react";

import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";

export default function HomeSection() {

  return (
      <header id='home'>
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
          <video autoPlay loop muted className='bgvideo'>
              <source src={'./videos/bgvideo.mov'} type='video/mp4'></source>
          </video>
      </header>
    );
}
