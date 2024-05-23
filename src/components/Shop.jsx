import { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import CardSlider from './Cards/CardSlider'

function Shop(props) {
  const { title, id } = props
  const titleRef = useRef()

  useEffect(() => {
    const titleString = titleRef.current
    let textContent = titleString.textContent.split(' ')
    const notFirstWords = textContent.splice(2 - textContent.length).join(' ')
    textContent = textContent.join(' ')
    titleString.innerHTML = `<span class="words">${textContent} </span>` + notFirstWords
  }, [])

  return (
    <section className="relative w-full" id={id}>
      <div className=" container flex flex-col justify-between gap-x-14 lg:py-[72px] py-16">
        <h1 className="md:mb-10 mb-6 text-center max-w-[550px] m-auto text-secondary" ref={titleRef}>
          {title}
        </h1>
        <CardSlider />
      </div>
    </section>
  )
}

Shop.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

export default Shop