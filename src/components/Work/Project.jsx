import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import ImageGrid from './ImageGrid'
import { TfiNewWindow } from 'react-icons/tfi'

function Project(props) {
  const { title, text, id, image, project, link, label } = props
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
      <div className="container flex flex-col items-center lg:py-[72px] py-10">
        <div className="relative flex flex-col w-full">
          <h1 className="mb-10" ref={titleRef}>{title}</h1>
          <div className="grid md:grid-cols-2 gap-4 mb-[16px]">
            <div className="flex items-center justify-center">
              <p className="mb-10">{text} <a href={link} className="inline-block flex font-semibold text-black hover:text-main-darker" target="_blank" rel="noreferrer"><span className="mr-2 w-full">{label} <TfiNewWindow className="inline-block relative top-[-3px]" /></span></a></p>
            </div>
            <img src={image} alt="" width="200" height="200" className="w-full" />
          </div>
          <ImageGrid project={project} />
        </div>
      </div>
    </section>
  )
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  project: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

export default Project