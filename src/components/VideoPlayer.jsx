import video from '../assets/mini-logo-preview-video.mp4'

function VideoPlayer(props) {
  return(
    <section className="relative container m-auto">
      <video controls width="100%" className="videoPlayer" src={video}></video>
    </section>
  )
}

export default VideoPlayer