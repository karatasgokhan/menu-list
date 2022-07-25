/* eslint-disable react/prop-types */
import React from 'react'

export default function OrderInfoItem (props) {
  return (
    <div className="order-info">
        <div className="icon">
            {props.icon}
        </div>
        <span>{props.name}</span>
        <span className='value'>{props.value} {props.name === 'Min. Tutar' ? 'TL' : 'dk'}</span>
    </div>
  )
}
