import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Testimonial from './Testimonial'
import json from '../../../data.json'

function TestimonialsSlider() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  return (
    <Carousel responsive={responsive} className='relative md:left-[-110px]'>
      {json.testimonials.text.map((element, key) => (
        <Testimonial author={element.author} text={element.para} key={key} />
      ))}
    </Carousel>
  )
}

export default TestimonialsSlider