import React from 'react';

const Sidebar = (props) => {
  return (
    <ul>
      <li>
        <a href="#">
          <i className="fas fa-bars"></i>
          <span>홈</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fas fa-home"></i>
          <span>홈</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fas fa-fire"></i>
          <span>인기</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fas fa-envelope-open-text"></i>
          <span>구독</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fas fa-music"></i>
          <span>유튜브 뮤직</span>
        </a>
      </li>
    </ul>
  );
}
  
export default Sidebar;