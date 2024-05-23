import PropTypes from 'prop-types'
import json from '/data.json'
import Paragraphs from './Paragraphs'
import Button from './Button'

function About(props) {
  const { title, image, id, background } = props

  return (
    <section className="relative w-full" id={id}>
      <div className="container flex lg:pt-[72px] lg:pb-[102px] py-16 justify-end text-white" style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Text paragraphs */}
        <div className="flex flex-col relative w-full md:w-[65%]">
          <div className='mb-10'>
            <h2 className="md:mb-10 mb-6 text-primary">{title}</h2>
            {json.about.text.map((element, key) => (
              <Paragraphs text={element.para} key={key} />
            ))}
          </div>
          <Button 
            label='Read more'
            backgroundColor='transparent'
            maxWidth='165px'
            padding='16px 30px'
            color='#ffffff'
            minWidth='165px'
          />
        </div>
      </div>
    </section>
  )
}

About.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired
}

export default About