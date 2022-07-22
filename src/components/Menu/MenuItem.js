/* eslint-disable react/prop-types */
import React from 'react'

import Plus from '../../UI/Icons/Plus'

export default function MenuItem (props) {
  return (
    <div className="menu-info-container">
        <div className="left-item">
            <div className="add-block">
                    <div className="count-item">
                        <input type="text" value={1}/>
                    </div>
                <div className="add-item"><Plus/></div>
            </div>
            <div className="menu-content-block">
                <p className="menu-name">{props.data.DisplayName}</p>
                <p className="menu-description">{props.data.Description}</p>
            </div>
        </div>
        <div className="menu-price-block">
            <span>{props.data.ListPrice}</span>
        </div>
    </div>
  )
}
