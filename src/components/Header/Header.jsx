import { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import Menu from '../Menu'

function Header() {
  const [ open, setOpen ] = useState(false)
  const [scroll, setScroll] = useState(false)
  
  useEffect(() => {
    // Sticky header
    window.addEventListener("scroll",  () => {
      setScroll(window.scrollY > 50)
    })

    // monitor the state of the toggle
    // add/remove click event handler to the document
    const clickHandler = ({ target }) => {
      const container = document.getElementById("container-nav")
      if (container.contains(target)) return
      setOpen(false)
    }
    document.addEventListener("click", clickHandler)
    // these functions clean up the event listeners
    return () => document.removeEventListener("click", clickHandler)
  }, [])

  // same but for keypresses
  // if the esc key is pressed close the toggles
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (keyCode !== 27) return;
      setOpen(false)
    }
    document.addEventListener("keydown", keyHandler)
    return () => document.removeEventListener("keydown", keyHandler)
  }, [])

  return (
    <>
      <header className="w-screen top-0" style={{ background: scroll ? "#fff" : "", zIndex: "999", padding: scroll ? "10px 0 10px 0" : "20px 0 20px 0", position: scroll ? "fixed" : "absolute" }}>
        <div className="relative flex flex-row justify-between item-center container">
          {/* Logo */}
          <a className="text-[22px] font-bold text-black hover:text-main" href="/">
          <span className="green-words">Ilze</span>Bilze</a>
          <div className="relative flex flex-row justify-between gap-x-5" id="container-nav">
            <button 
            size="sm"
            aria-label="open menu"
            aria-expanded={open === true ? "true" : "false"}
            className={open === true ? "active py-2.5 px-[32px] hover:bg-main border-[#C2D6C1] border-b-1 rounded-full border" : "py-2.5 px-[32px] hover:bg-main-lighter border-[#C2D6C1] border-b-1 rounded-full border"}
            onClick={ () => setOpen(!open) }
            ><FaBars size="24" /></button>
          </div>
        </div>
        {/* Menu */}
        <div className={open ? "block" : "hidden"}>
          <Menu />
        </div>
      </header>
    </>
  )
}

export default Header