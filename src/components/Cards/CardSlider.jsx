import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Card from "./Card"
import json from '../../../data.json'

function CardSlider() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  return (
    <Carousel responsive={responsive} className='relative top-[40px] bottom-[72px]'>
      {json.shop.content.map((element, key) => (
        <Card sold="true" sale="false" text={element.text} image={element.image} alt={element.alt} key={key} url={element.url} />
      ))}
    </Carousel>
  )
}

export default CardSlider