
import PropTypes from 'prop-types'

function Input(props) {
  const { name, type, id } = props
  return (
    <>
      <input id={id} type={type} name={name} className="w-full border bg-transparent border-x-0 border-t-0 border-[#C2D6C1] border-b-1 pb-1.5 px-4 pt-1.5 hover:bg-main-lighter active:bg-main-lighter focus:outline-none focus:ring-1 focus:ring-main transition-all" />
    </>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

export default Input