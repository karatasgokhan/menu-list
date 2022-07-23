import React from 'react'

// eslint-disable-next-line react/prop-types
export default function DefaultLayout ({ children }) {
  return (
    <div className="default-layout-root">
      <div className="default-layout-wrapper">{children}</div>
    </div>
  )
}
