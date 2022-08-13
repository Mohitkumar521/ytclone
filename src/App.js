import'./App.css';
import {Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './Components/SearchBar';
import VideoDetails from './Components/VideoDetail';
import VideoList from './Components/VideoList';
import { useState,useEffect } from 'react';
import youtube from './api/youtube';
import { click } from '@testing-library/user-event/dist/click';
function App() {

const [videos,setVideos] = useState([])
const [clickVideo,setClickVideo] = useState()
const selectedVideo = clickVideo!=null ? clickVideo :(videos.length!=0 ?videos[3]: null)


async function handleSubmit(searchTerm){
 const response = await youtube.get("search",{
        params:{
            part:"snippet",
            maxResults:5,
            key:'AIzaSyBDaTu9bJ4ewZCIntbWzrFDswdU976HXAA',
            q:searchTerm
        }
    })
    setVideos(response.data.items)
}

const onVideoClick = (video) =>{
    setClickVideo(video)
}


useEffect(()=>{
handleSubmit('')

},[])
    return (
        <div className='App'>
            <Container>
           <SearchBar onSubmit={handleSubmit}/>
           <Row>
            <Col sm={8}>
                <VideoDetails video={selectedVideo}/>
                
            </Col>
            <Col sm={4}>
            <VideoList videos={videos} onVideoSelect={onVideoClick}/>
            </Col>
           </Row>
            </Container>
        </div>
    )
}


export default App;
