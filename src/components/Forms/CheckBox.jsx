import PropTypes from 'prop-types'

function CheckBox(props) {
  const { label, name, value, id, htmlFor } = props
  return (
    <div className="relative min-w-[198px] mb-7">
      <input type="checkbox" id={id} name={name} value={value} className="bg-transparent opacity-0" />
      <label htmlFor={htmlFor} className="block w-full text-center border border-[#C2D6C1] border-b-1 rounded-full bg-main-lighter py-2.5 px-6 hover:bg-main cursor-pointer">{label}</label>
    </div>
  )
}

CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired
}

export default CheckBox