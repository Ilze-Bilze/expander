import { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import json from '/data.json'
import Paragraphs from './Paragraphs'

function About(props) {
  const { title, image, id, background } = props
  const titleRef = useRef()

  useEffect(() => {
    const titleString = titleRef.current
    let textContent = titleString.textContent.split(' ')
    const notFirstWords = textContent.splice(1 - textContent.length).join(' ')
    textContent = textContent.join(' ')
    titleString.innerHTML = `<span class='green-words'>${textContent} </span>` + notFirstWords
  }, [])

  return (
    <section className="relative w-full" id={id}>
      <div className="container flex gap-x-14 lg:py-[72px] py-16 justify-end text-white" style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Text paragraphs */}
        <div className="flex flex-col relative w-full md:w-[65%]">
          <h2 className="md:mb-10 mb-6" ref={titleRef}>
            {title}
          </h2>
          {json.about.text.map((element, key) => (
            <Paragraphs text={element.para} key={key} />
          ))}
          <button className='border'>Read more</button>
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