import { useCallback, useEffect, useState } from 'react';

import styles from './app.module.css';
import './reset.css';

import VideoList from './components/video_list/video_list';
import SearchHeader from './components/searchHeader/searchHeader';
import Sidebar from './components/sidebar/sidebar';
import VideoDetail from './components/video_detail/video_detail';



function App({youtube}) {

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);


  useEffect(()=>{
    youtube
      .mostPopular()
      .then(videos => setVideos(videos));
  }, [youtube]);



  const search = useCallback(
    query =>{
      setSelectedVideo(null);
      youtube
        .search(query) 
        .then(videos => setVideos(videos));
    },[youtube]
  );

  const selectVideo = (video)=>{
    setSelectedVideo(video);
  };


  return (
    <>
    <Sidebar />
    <div className={styles.app}>
      <SearchHeader onSearch={search}/>

      <section className={styles.container}>

      {selectedVideo && (
        <div className={styles.detail}>
          <VideoDetail video={selectedVideo} />
        </div>
      )}
        <div className={styles.list}>
          <VideoList 
            videos={videos} 
            onVideoClick={selectVideo}
            display={ selectedVideo ? 'list' : 'grid'} />

        </div>
      </section>


    </div>
    </>
  );
}

export default App;
