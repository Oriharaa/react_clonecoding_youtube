import { useEffect, useState } from 'react';

import styles from './app.module.css';
import './reset.css';

import VideoList from './components/video_list/video_list';
import SearchHeader from './components/searchHeader/searchHeader';
import Sidebar from './components/sidebar/sidebar';



function App({youtube}) {

  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    youtube
      .mostPopular()
      .then(videos => setVideos(videos));
  }, []);



  const search = (query)=>{
    youtube
      .search(query) 
      .then(videos => setVideos(videos));
  };

  return (
    <>
    <Sidebar />
    <div className={styles.app}>
      <SearchHeader onSearch={search}/>
      <VideoList videos={videos} />
    </div>
    </>
  );
}

export default App;
