import React from 'react'

import PropTypes from 'prop-types'
export default function DefaultLayout ({ children }) {
  return (
    <div className="default-layout-root">
      <div className="default-layout-wrapper">{children}</div>
    </div>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.any.isRequired
}
