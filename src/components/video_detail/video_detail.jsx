import React from 'react';
import styles from './video_detail.module.css';


const VideoDetail = ({video}) => (
  <section className={styles.detail}>
    <iframe 
      className={styles.video}
      type="text/html" 
      title="youtube video player"
      width="100%" 
      height="450px"
      src={`https://www.youtube.com/embed/${video.id}`}
      frameBorder="0" 
      allowFullScreen>
    </iframe>
  </section>
)

export default VideoDetail;