import PropTypes from 'prop-types'
import TestimonialsSlider from './TestimonialsSlider'

function Testimonials(props) {
  const { title, image, id } = props

  return (
    <section className="relative w-full" id={id}>
      <div className="container flex flex-col md:flex-row justify-between gap-x-14 lg:py-[72px] py-16">
      {/* Image */}
        <div className="relative flex xl:items-center items-start w-full md:w-[50%] mb-10">
          <img className="w-full" src={image} width="200" height="200" alt="Ilze Spruge" />
        </div>
      {/* Text paragraphs */}
        <div className="flex flex-col relative w-full md:w-[50%]">
          <h3 className="md:mb-10 mb-6 text-secondary">
            {title}
          </h3>
          <TestimonialsSlider />
        </div>
      </div>
    </section>
  )
}

Testimonials.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

export default Testimonials