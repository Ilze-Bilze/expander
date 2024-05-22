import { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import ContactForm from './Forms/ContactForm'

function ContactSection(props) {
  const { title, text, id, background } = props

  const titleRef = useRef()

  useEffect(() => {
    const titleString = titleRef.current
    let textContent = titleString.textContent.split(' ')
    const notFirstWords = textContent.splice(2 - textContent.length).join(' ')
    textContent = textContent.join(' ')
    titleString.innerHTML = `<span class='green-words'>${textContent} </span>` + notFirstWords
  }, [])

  return (
    <section className="relative w-full" id={id}>
      <div className="container flex flex-col items-center lg:py-[72px] py-16" style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="relative flex flex-col items-center max-w-[950px]">
          <h2 className="title font-bold leading-none mb-10 text-center" ref={titleRef}>{title}</h2>
          <p className="text-[22px] leading-relaxed mb-10 text-center">{text}</p>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

ContactSection.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired
}

export default ContactSection