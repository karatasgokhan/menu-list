/* eslint-disable react/prop-types */
import React from 'react'
import MenuItem from './MenuItem'

export default function Menu (props) {
  return (
    <div className="menu-wrapper">
        <div className="menu-head">
            <p>{props.data.DisplayName}</p>
        </div>
        {
            props.data.Products.map((item, index) => {
              return (
                    <MenuItem key={index} data={item}/>
              )
            })
        }
    </div>
  )
}
