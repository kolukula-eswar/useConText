import React from 'react';
import about from './about';

const Sidebar = () => {
  return (
    <div className='aside'>
        <div className="menu">
        <ul>
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="about">ABOUT</a>
          </li>
          <li>
            <a href="#work">PORTFOLIO</a>
          </li>
          <li>
            <a href="#clients">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar