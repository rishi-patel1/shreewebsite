import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import YouTube from 'react-youtube';
import {GSTVideos} from '../../data'
import Card from '../../UI/Card';
import './gallery.css'

const Gallery = () => {

  return (
    <>
    <Header title="GST Help" image={HeaderImage}>
      Watch these videos to get a clearer understanding of integrating GST with Shree Sava
    </Header>
    <section className="gallery">
      <div className="container gallery__container">
        {
        GSTVideos.map(({id,videoId,opts,title}) => {
              return <Card key={id} className='video'>
                <h3>{title}</h3>
                <YouTube videoId = {videoId} opts = {opts} />
              
                
                
              </Card>
            })
        }
      </div>
    </section>
    </>
  )
}

export default Gallery