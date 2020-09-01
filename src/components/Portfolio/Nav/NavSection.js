import React from "react";

import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";


export default function NavSection() {

  return (
      <div id='nav'>
          <LinkScroll className='nav-item'
                      to='home'
                      spy={true}
                      smooth={true}
                      duration={350}>
              <button className='nav-item-btn'>
                  <span className='nav-item-text'>
                      Home
                  </span>
              </button>
          </LinkScroll>
          <LinkScroll className='nav-item'
                      to='about'
                      spy={true}
                      smooth={true}
                      offset={-45}
                      duration={350}>
              <button className='nav-item-btn'>
                  <span className='nav-item-text'>
                      About
                  </span>
              </button>
          </LinkScroll>
          <LinkScroll className='nav-item'
                      to='portfolio'
                      spy={true}
                      smooth={true}
                      offset={-45}
                      duration={350}>
              <button className='nav-item-btn'>
                  <span className='nav-item-text'>
                      Portfolio
                  </span>
              </button>
          </LinkScroll>
          <LinkScroll className='nav-item'
                      to='contact'
                      spy={true}
                      smooth={true}
                      offset={-45}
                      duration={350}>
              <button className='nav-item-btn'>
                  <span className='nav-item-text'>
                      Contact
                  </span>
              </button>
          </LinkScroll>
      </div>
  );
}
