import PropTypes from 'prop-types'
import Card from './Cards/Card'
import CardSlider from './Cards/CardSlider'

function Shop(props) {
  const { title, id } = props

  return (
    <section className="relative w-full" id={id}>
      <div className=" container flex flex-col justify-between gap-x-14 lg:py-[72px] py-16">
        <h1 className="md:mb-10 mb-6 text-center max-w-[600px] m-auto">
          {title}
        </h1>
        {/* Single shop items */}
        <CardSlider />
      </div>
    </section>
  )
}

Shop.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

export default Shop