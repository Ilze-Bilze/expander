import json from '../../../data.json'
import PropTypes from 'prop-types'

function Testimonial(props) {
  const { text, author } = props

  const firstLetter = author
  const letter = firstLetter.substring(0,1)

  return (
    <div className="rounded-xl bg-white p-5 text-left ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center shadow-md">
      <p>{text}</p>
      <h5 className="mt-5">
        <span className='relative inline-flex justify-center bg-primary rounded-full text-white w-[30px] h-[30px]'>
          {letter}
        </span> {author}
      </h5>
    </div>
  )
}

Testimonial.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

export default Testimonial