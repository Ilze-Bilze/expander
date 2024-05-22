import PropTypes from 'prop-types'
import video from '../assets/mini-logo-preview-video.mp4'

function VideoPlayer(props) {
  const { id } = props

  return(
    <section className="relative container m-auto" id={id}>
      <video controls width="100%" className="videoPlayer" src={video}></video>
    </section>
  )
}

VideoPlayer.propTypes = {
  id: PropTypes.string.isRequired
}

export default VideoPlayer