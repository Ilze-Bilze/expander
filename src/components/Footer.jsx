import { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { GrDocumentVerified } from 'react-icons/gr'

function Footer(props) {
  const { title, text } = props
  const titleRef = useRef()
  const [year, setYear] = useState(new Date().getFullYear())

  useEffect(() => {
    setYear(new Date().getFullYear())

    const titleString = titleRef.current
    let textContent = titleString.textContent.split(' ')
    const notFirstWords = textContent.splice(1 - textContent.length).join(' ')
    textContent = textContent.join(' ')
    titleString.innerHTML = `<span class='green-words mr-[-10px]'>${textContent} </span>` + notFirstWords
  }, [])

  return (
    <footer className="relative w-screen bg-black text-white">
      <div className="relative flex flex-col container lg:pt-[72px] pt-10 lg:pb-[40px] pb-10">
        <div className="flex flex-col w-full mb-[100px]">
          <div className="relative">
            <p className="h3 mb-5">{title}</p>
            <p className="link font-bold leading-none" ref={titleRef}>{text}</p>
            <p className="mt-5">Take a look at my impressive resume <a href="https://ilze-spruge-cv.netlify.app" target="_blank" className="inline-block" rel="noreferrer"><GrDocumentVerified /></a> !</p>
          </div>
        </div>
        <div className="border-[#C2D6C1] border-t w-full pt-[23px]">
          <p className="text-sm">{`© ${year} Ilze Spruge - All rights reserved.`}</p>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Footer