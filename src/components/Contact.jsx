import { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import ContactForm from './Forms/ContactForm'

function ContactSection(props) {
  const { title, text, id, background } = props

  return (
    <section className="relative w-full" id={id}>
      <div className="container flex flex-col items-center lg:py-[72px] py-16" style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="relative flex flex-col items-center max-w-[950px]">
          <h2 className="title font-bold leading-none mb-10 text-center text-primary">{title}</h2>
          <p className="text-[22px] leading-relaxed mb-10 text-center text-white">{text}</p>
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