
import PropTypes from 'prop-types'

function Input(props) {
  const { name, type, id } = props
  return (
    <>
      <input required placeholder={name} id={id} type={type} name={name} className="relative w-full bg-white/[.50] rounded-xl py-3.5 px-4 hover:bg-primary-lighter active:bg-primary-lighter focus:outline-none focus:ring-1 focus:ring-primary transition-all placeholder:text-black" />
    </>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

export default Input