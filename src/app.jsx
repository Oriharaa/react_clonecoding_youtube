import { useEffect, useState } from 'react';

import styles from './app.module.css';
import './reset.css';

import VideoList from './components/video_list/video_list';
import SearchHeader from './components/searchHeader/searchHeader';
import Sidebar from './components/sidebar/sidebar';



function App() {

  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyC1VMgYAV5t4qY_YAMC0PePdNOKo90CtZI", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);

  return (
    <>
    <Sidebar />
    <div className={styles.app}>
      <SearchHeader />
      <VideoList videos={videos} />
    </div>
    </>
  );
}

export default App;
