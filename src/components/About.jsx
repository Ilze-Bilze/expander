import { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import json from '/data.json'
import Paragraphs from './Paragraphs'

function About(props) {
  const { title, image, id } = props
  const titleRef = useRef()

  useEffect(() => {
    const titleString = titleRef.current
    let textContent = titleString.textContent.split(' ')
    const notFirstWords = textContent.splice(1 - textContent.length).join(' ')
    textContent = textContent.join(' ')
    titleString.innerHTML = `<span class='green-words'>${textContent} </span>` + notFirstWords
  }, [])

  return (
    <section className="relative w-screen" id={id}>
      <div className="container flex flex-col md:flex-row justify-between gap-x-14 lg:py-[72px] py-16">
      {/* Image */}
        <div className="relative flex xl:items-center items-start w-full md:w-[36%] mb-10">
          <img className="w-full" src={image} width="200" height="200" alt="Ilze Spruge" />
        </div>
      {/* Text paragraphs */}
        <div className="flex flex-col relative w-full md:w-[64%]">
          <h2 className="md:mb-10 mb-6" ref={titleRef}>
            {title}
          </h2>
          {json.about.text.map((element, key) => (
            <Paragraphs text={element.para} key={key} />
          ))}
        </div>
      </div>
    </section>
  )
}

About.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

export default About