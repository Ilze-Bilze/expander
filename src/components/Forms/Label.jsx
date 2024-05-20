import PropTypes from 'prop-types'

function Label(props) {
  const { label, htmlFor } = props
  return (
    <label htmlFor={htmlFor} className="font-medium text-black">{label}</label>
  )
}

Label.propTypes = {
  label: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired
}

export default Label