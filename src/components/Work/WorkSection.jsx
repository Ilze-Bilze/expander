import { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import json from '/data.json'
import ProjectCard from './ProjectCard'

function WorkSection(props) {
  const { title, id } = props
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
      <div className="container flex flex-col lg:py-[72px] py-16">
      {/* Title */}
        <h2 className="mb-10" ref={titleRef}>{title}</h2>
      {/* Content */}
        <div className="grid md:grid-cols-2 gap-4 md:[&>*:nth-child(3n)]:row-3 md:[&>*:nth-child(3n)]:col-span-2">
          {json.work.content.map((element, key) => (
            <ProjectCard title={element.title} alt={element.alt} image={element.image} key={key} URL={element.url} />
          ))}
        </div>
      </div>
    </section>
  )
}

WorkSection.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  URL: PropTypes.any
}

export default WorkSection