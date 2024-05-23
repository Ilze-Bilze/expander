import PropTypes from 'prop-types'

function Button(props) {
  const { label, type } = props
  
  return (
    <button type={type} className="bg-primary text-white hover:text-white rounded-full min-w-[170px] max-w-[170px] py-[16px] hover:bg-black">{label}</button>
  )
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

export default Button