import { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

function Card(props) {
  const { sale, sold, image, text, alt, url } = props
  const [showSpan, setShowSpan] = useState()
  const [showSale, setShowSale] = useState()

  const visible = () => {
    setShowSpan({ showSpan: true });
  }

  const hidden = () => {
    setShowSpan({ showSpan: false });
  }

  return (
    // box-shadow: 1px 2px 4px 0px rgba(0,0,0,0.25);
    <div className="max-w-[245px]">
      <a href={url} target="_blank">
        <div className="rounded-xl bg-white py-3 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center shadow-md">
          <div className="mx-auto max-w-xs px-2.5">
            {/* Image */}
            <div className="relative flex justify-center">
              <img width="98" height="219" src={image} alt={alt} />
              {/* Buttons */}
              <div className='border absolute bottom-0 left-0'>
              { visible === true ? (
                <span className='border rounded-3xl px-5 py-1 text-sm'>Sold</span>
              ) : (
                <></>
              )}
              { showSale === true ? (
                <span className='border bg-primary rounded-3xl px-5 py-1 text-sm text-white'>Sale</span>
              ) : (
                <></>
              )}
              </div>
            </div>
            {/* Price */}
            <p className="mt-6 flex items-baseline justify-center gap-x-2">
              <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600 line-through">$36.95</span>
              <span className="text-3xl font-bold tracking-tight text-gray-900">$26.95</span>
            </p>
            {/* Text */}
            <p className="mt-6 text-xs leading-5 text-gray-600">
              {text}
            </p>
          </div>
        </div>
      </a>
    </div>
  )
}

Card.propTypes = {
  sold: PropTypes.any,
  sale: PropTypes.any,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default Card