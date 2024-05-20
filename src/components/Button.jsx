import { useState } from 'react'
import PropTypes from 'prop-types'


export default function Button(props) {
  const { label, color, padding, maxWidth, minWidth, onClick, backgroundColor } = props

  const [background, setColor] = useState()
  
  return (
    <button 
      type="button" 
      onClick={onClick}
      style={{color, minWidth, padding, maxWidth, backgroundColor}}
      onMouseEnter={() => setColor('background: #C2D6C1')}
      className="text-center order-b-1 rounded-full border border-[#C2D6C1]">
      {label}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
  padding: PropTypes.string,
  maxWidth: PropTypes.string,
  minWidth: PropTypes.string,
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.any
}