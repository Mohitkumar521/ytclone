import { Row, Col, Container } from 'react-bootstrap';


function VideoItem({videoItem,onVideoSelect}) {
console.log(videoItem)

    return (
        <Container>
        <Row onClick={()=>onVideoSelect(videoItem)}>
            <Col sm={8} style={{marginTop:"20px"}}>
     <img src={videoItem.snippet.thumbnails.default.url} width="200"/>
        </Col>
            <Col sm={12}>
                <p>{videoItem.snippet.title}</p>
            </Col>
        </Row>
        </Container>
    )
}



export default VideoItem