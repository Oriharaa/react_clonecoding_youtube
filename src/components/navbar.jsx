import React, { Component } from 'react';

import '@fortawesome/fontawesome-free/js/all.js';
import youtubeLogo from './img/youtube-logo.png';


class Navbar extends Component {
  render() {
    return (
      <navbar className="navbar">
        <div className="navbar__logo">
          <img src={youtubeLogo} />
        </div>
        <input 
          type="text"
          placeholder="Search..."
        />
        <span>
          <i className="fas fa-search"></i>
        </span>
      </navbar>
    );
  }
}

export default Navbar;