import { Fragment } from 'react'
import PropTypes from 'prop-types'
import json from '/data.json'

function ImageGrid(props) {
  const { project } = props

  return (
    <div className="grid md:grid-cols-2 gap-4 md:[&>*:nth-child(3n)]:row-3 md:[&>*:nth-child(3n)]:col-span-2">
      {json[project].map((element, i) => (
        <Fragment key={i}>
        {element.imagegrid.map((item, key) => (
          <Fragment key={key}>
            <img src={item.image} alt={item.alt} width="200" height="200" className="w-full" key={key} />
          </Fragment>
        ))}
        </Fragment>
      ))}
    </div>
  )
}

ImageGrid.propTypes = {
  project: PropTypes.string.isRequired
}

export default ImageGrid