import { useEffect, useState } from 'react';
import './app.css';
import './reset.css';
// import Navbar from './components/navbar';
import VideoList from './components/video_list/video_list';


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
    <VideoList videos={videos} />
    </>
  );
}

export default App;
