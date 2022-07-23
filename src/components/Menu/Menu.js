import React from 'react'

import PropTypes from 'prop-types'

import MenuItem from './MenuItem'

export default function Menu ({ data }) {
  return (
    <div className="menu-wrapper">
      <div className="menu-head">
        <p>{data.DisplayName}</p>
      </div>
      {data.Products.map((item, index) => {
        return <MenuItem key={index} data={item} />
      })}
    </div>
  )
}

Menu.propTypes = {
  data: PropTypes.any.isRequired
}
