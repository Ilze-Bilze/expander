import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

function ProjectCard(props) {
  const { title, alt, image, URL } = props
  const navigateTo = useNavigate()

  return (
    <div className="card row-span-auto cursor-pointer hover:text-main" onClick={() => navigateTo(`${URL}`)} aria-label="View the project">
      <img src={image} width="200" height="200" alt={alt} className="w-full" />
      <div className="card-body flex flex-row justify-between items-center mt-2.5 mb-5">
        <h3 className="card-title">{title}</h3>
      </div>
    </div>
  )
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  URL: PropTypes.string
}

export default ProjectCard