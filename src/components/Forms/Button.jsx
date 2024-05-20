import PropTypes from 'prop-types'

function Button(props) {
  const { label, type } = props
  
  return (
    <button type={type} className="bg-black text-white hover:text-black border border-black hover:border-[#C2D6C1] border-b-1 rounded-full min-w-[170px] max-w-[170px] py-[25px] hover:bg-main">{label}</button>
  )
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

export default Button